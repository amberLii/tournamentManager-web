import React, {useState} from 'react';
import {useMutation, useQuery} from '@apollo/client';
import {TOGGLE_FAVORITE} from '../gql/mutation';
import {GET_MY_FAVORITES, GET_NOTE} from '../gql/query';
import Button from "./Button";
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
const FavoriteNote = props => {
    // store the note's favorite count as state
    const [count, setCount] = useState(props.favoriteCount);
    // store if the user has favorited the note as state
    const [favorited, setFavorited] = useState(
        // check if the note exists in the user favorites list
        props.me.favorites.filter(note => note.id === props.noteId).length > 0
    );
    const [open, setOpen] = React.useState(false);
    const [leave, setLeave] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleLeave = () => {
        setLeave(true);
    };

    const handleClose = () => {
        setOpen(false);
        setLeave(false);
    };

    // toggleFavorite mutation hook
    const [toggleFavorite] = useMutation(TOGGLE_FAVORITE, {
        variables: {
            id: props.noteId
        },
        // refetch the GET_MY_FAVORITES query to update the cache
        refetchQueries: [{query: GET_MY_FAVORITES}]
    });
    const id = props.noteId;
    const {data} = useQuery(GET_NOTE, {variables: {id}});
    // if the user has favorited the note display the option to remove the favorite
    // else display the option to add as a favorite
    return (
        <React.Fragment>
            {favorited ? (
                <Button
                    primary
                    onClick={() => {
                        handleLeave();
                    }}
                    data-cy="favorite"
                >
                    Leave
                </Button>
            ) : (
                <Button
                    primary
                    onClick={() => {
                        handleClickOpen();
                        toggleFavorite();
                        setFavorited(true);
                        setCount(count + 1);
                    }}
                    data-cy="favorite"
                >
                    Join Now
                </Button>
            )}
            {/*Join Dialog*/}
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="join-title"
                aria-describedby="join-description"
            >
                <DialogTitle id="join-title">{"Tournament Registration"}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="join-description">
                        We have sent venue link to your provided email address, please check your email
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} primary>
                        Ok
                    </Button>
                </DialogActions>
            </Dialog>
            {/*Leave confirmation  Dialog*/}
            <Dialog
                open={leave}
                onClose={handleClose}
                aria-labelledby="leave-title"
                aria-describedby="confirmation"
            >
                <DialogTitle id="leave-title">{"Leave tournament"}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="confirmation">
                        Are you sure you want to quit?
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button primary onClick={handleClose}>
                        Cancel
                    </Button>
                    <Button
                        primary
                        onClick={() => {
                            handleClose();
                            toggleFavorite();
                            setFavorited(false);
                            setCount(count - 1);
                        }}>
                        Confirm
                    </Button>
                </DialogActions>
            </Dialog>
            {count} / {data.note.maxPlayers}
        </React.Fragment>
    );
};

export default FavoriteNote;

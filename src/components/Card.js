import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 120
    },
    container:{
        height: 24,
        margin: 4,
        padding :0,
    },
});

 const MediaCard = props => {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                    style = {{ height: 275, paddingTop: '30'}}
                    square="true"
                    className={classes.media}
                    image={props.image}
                    component="img"
                    title=" Reptile"
                />
                <CardContent className={classes.container}>
                    <Typography component="h5">
                       {props.title}
                    </Typography>
                </CardContent>
            </CardActionArea>

        </Card>
    );
};
export default MediaCard;
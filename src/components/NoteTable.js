import React from 'react';
import { format } from 'date-fns';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TablePagination from '@material-ui/core/TablePagination';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import isPast from 'date-fns/is_past';

const StyledTableCell = withStyles((theme) => ({
    head: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 14,
    },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
    root: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.background.default,
        },
    },
}))(TableRow);

const useStyles = makeStyles({
    tableContainer:{
        marginTop: 30,
    },
    table: {
        minWidth: 700,
    },
});

const NoteTable =({notes}) => {
    const classes = useStyles();
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    return (
        <React.Fragment>
        <TableContainer className={classes.tableContainer} component={Paper}>
            {notes.length ?
                <Table className={classes.table} aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell align="left">Game</StyledTableCell>
                            <StyledTableCell align="left">Title</StyledTableCell>
                            <StyledTableCell align="left">Platform</StyledTableCell>
                            <StyledTableCell align="left">Start Date</StyledTableCell>
                            <StyledTableCell align="left">Players</StyledTableCell>
                            <StyledTableCell align="left">Register</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {notes.map(note => (
                            <StyledTableRow key={note.id}>
                                <StyledTableCell align="left">{note.category}</StyledTableCell>
                                <StyledTableCell align="left">{note.title}</StyledTableCell>
                                <StyledTableCell align="left">{note.platform}</StyledTableCell>
                                <StyledTableCell align="left">{format(note.time, 'MMM Do YYYY HH:MM aa')}</StyledTableCell>
                                <StyledTableCell align="left">{note.favoriteCount} / {note.maxPlayers}</StyledTableCell>
                                <StyledTableCell>
                                    {isPast(note.time) ?
                                        <Link to={`/note/${note.id}`} style={{textDecoration:'none'}}>
                                            <Button variant="contained">Result</Button>
                                        </Link> :
                                        <Link to={`/note/${note.id}`} style={{textDecoration:'none'}}>
                                            <Button variant="contained">Details</Button>
                                        </Link>}
                                </StyledTableCell>
                            </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>
                : <p>No games yet </p> }
        </TableContainer>
            <TablePagination
                rowsPerPageOptions={[10, 25, 100]}
                component="div"
                count={notes.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onChangePage={handleChangePage}
                onChangeRowsPerPage={handleChangeRowsPerPage}
            />
        </React.Fragment>
    );
};

export default NoteTable;


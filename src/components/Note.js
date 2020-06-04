import React from 'react';
import { useQuery } from '@apollo/client';
import { format } from 'date-fns';
import NoteUser from './NoteUser';
import {GET_Players, IS_LOGGED_IN,GET_ME} from "../gql/query";
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Email from "./Email";
import Chip from "@material-ui/core/Chip";
import Button from '../components/Button'
import {Link} from 'react-router-dom';
import isPast from 'date-fns/is_past'
// Style the note meta data
const NoteWrapper = styled.div`
  max-width: 1140px;
  margin: 0 auto;
  margin-bottom: 2em;
  padding-bottom: 2em;
  border-bottom: 1px solid #f5f4f0;
`;

const MetaData = styled.div`
  @media (min-width: 500px) {
    display: flex;
    align-items: top;
  }
`;
const UserActions = styled.div`
  margin-left: auto;
`;
const theme = createMuiTheme();

theme.typography.h2 = {
    fontSize: '2 rem',
    '@media (min-width:600px)': {
        fontSize: '1.5rem',
    },
    [theme.breakpoints.up('md')]: {
        fontSize: '2rem',
    },
};

// theme.typography.
function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    <Typography component={'div'}>{children}</Typography>
                </Box>
            )}
        </div>
    );
}
TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
    },
}));

const Note = ({ note }) => {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const id = note.id;
    const {loading, error, data} = useQuery(GET_Players, {
        variables: {
            id
        }
    });

    const {data: userdata} = useQuery(IS_LOGGED_IN);
    const {data: contactdata} = useQuery(GET_ME);

  if (loading) return <p>Loading...</p>;

  if (error) return <p>Error!</p>;

  return (
      <NoteWrapper className={classes.root} >
          <AppBar position="static">
              <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
                  <Tab label="Description" {...a11yProps(0)} />
                  <Tab label="Participants" {...a11yProps(1)} />
                  <Tab label="Contact Tournament Organiser" {...a11yProps(2)} />
              </Tabs>
          </AppBar>
          <TabPanel value={value} index={0}>
              <ThemeProvider theme={theme}>
                  <Typography variant="h4"> {note.category} -- {note.title}</Typography>
              </ThemeProvider>

              <MetaData>
                  {isPast(note.time) ?
                      <div>
                          <Typography variant="h5">This game is finished</Typography>
                          <Link to={"/result"}>
                              <Button style={{width: "150px"}}>Check Reslut Here</Button>
                          </Link>
                      </div>
                      :
                      <>
                          {userdata.isLoggedIn ? (
                              <UserActions>
                                  <NoteUser note={note}/>
                              </UserActions>
                          ) : (
                              <UserActions>
                                  <em>Joined:</em> {note.favoriteCount} / {note.maxPlayers} <br/>
                                  <Link to={"/signin"}>
                                      <Button primary style={{width: "110px"}}>Register Now </Button>
                                  </Link>
                              </UserActions>
                          )}
                      </>
                  }
               </MetaData>
              <ThemeProvider theme={theme}>
                  <Typography variant="h2">Description</Typography>
                  <Typography>{note.desc}</Typography>
                  <Typography variant="h5">Platform</Typography>
                  <Typography> {note.platform}</Typography>
                  <Typography variant="h5">Time</Typography>
                  <Typography> {format(note.time, 'MMM Do YYYY HH:MM aa')}</Typography>
                  <Typography variant="h5">Rules</Typography>
                  <Typography> {note.rule}</Typography>
                  <Typography variant="h5">Prize</Typography>
                  <Typography> {note.prize}</Typography>
              </ThemeProvider>
          </TabPanel>
          <TabPanel value={value} index={1}>
              {data.note.favoriteCount ?
                  <div>
                      {data.note.favoritedBy.map(
                          favoritedBy => (
                              <Chip
                                  variant="default"
                                  size="medium"
                                  color="primary"
                                  key={favoritedBy.username}
                                  label={favoritedBy.username}
                              />
                          ))}
                  </div>
                  :
                  <p>No Joined Players yet</p>
              }
          </TabPanel>
          <TabPanel value={value} index={2}>
              {userdata.isLoggedIn ? (
                  <Email name={contactdata.me.username} email={contactdata.me.email}/>
              ) : (
                  <Link to={"/signin"}>
                      <Button primary style={{width :"110px"}}>Please Log in </Button>
                  </Link>
              )}</TabPanel>
      </NoteWrapper>
  );
};

export default Note;


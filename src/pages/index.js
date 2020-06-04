// import React and our routing dependencies
import React from 'react';
import { useQuery, gql } from '@apollo/client';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import { GET_ME } from '../gql/query';


// import our shared layout component
import Layout from '../components/Layout';

// import our routes
import Home from './home';
import TournamentFeed from './tournamentFeed';
import Note from './note';
import SignUp from './signup';
import SignIn from './signin';
import NewNote from './new';
import EditNote from './edit';
import Category from './category';
import Profile from './profile';
import EditProfile from './editProfile';
import UploadResult from './uploadResult';
import Contact from "./contactUs";
import Terms from "./terms";
import Policy from "./policy";
import About from "./aboutUs";

const IS_LOGGED_IN = gql`
  {
    isLoggedIn @client
  }
`;


// define our routes
const Pages = () => {
  const { loading, error, data } = useQuery(GET_ME);
  let isAdmin = false;

  if (loading) {
    isAdmin = false;
  }
  // if there is an error fetching the data, display an error message
  if (error) {
    isAdmin = false;
  }

  console.log("data returned");
  console.log(data);
  if (data && data.me){
    isAdmin = data.me.isAdmin;
    console.log("isAdmin data");
    console.log(isAdmin);
  }

  // let isAdmin = true;

  if (isAdmin) {
    return (
      <Router>
        <Layout isAdmin={isAdmin}>
          <Route exact path="/" component={Home}/>
          <Route exact path="/feed" component={TournamentFeed}/>
          <Route path="/note/:id" component={Note}/>
          <Route path="/category" component={Category}/>
          <Route path="/signup" component={SignUp}/>
          <Route path="/signin" component={SignIn}/>
          <Route path="/about" component={About}/>
          <Route path="/contact" component={Contact}/>
          <Route path="/policy" component={Policy}/>
          <Route path="/terms" component={Terms}/>
          <PrivateRoute path="/new" component={NewNote}/>
          <PrivateRoute path="/scoreCard" component={UploadResult}/>
          <PrivateRoute path="/edit/:id" component={EditNote}/>
          <PrivateRoute exact path="/profile" component={Profile}/>
          <PrivateRoute path="/editProfile/:id" component={EditProfile}/>
        </Layout>
      </Router>
    );
  }else {
    return (
      <Router>
        <Layout isAdmin={isAdmin}>
          <Route exact path="/" component={Home}/>
          <Route path="/note/:id" component={Note}/>
          <Route path="/category" component={Category}/>
          <Route path="/signup" component={SignUp}/>
          <Route path="/signin" component={SignIn}/>
          <Route path="/about" component={About}/>
          <Route path="/contact" component={Contact}/>
          <Route path="/policy" component={Policy}/>
          <Route path="/terms" component={Terms}/>
          <PrivateRoute path="/edit/:id" component={EditNote}/>
          <PrivateRoute exact path="/profile" component={Profile}/>
          <PrivateRoute path="/editProfile/:id" component={EditProfile}/>
        </Layout>
      </Router>
    );
  }
};

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { loading, error, data } = useQuery(IS_LOGGED_IN);
  // if the data is loading, display a loading message
  if (loading) return <p>Loading...</p>;
  // if there is an error fetching the data, display an error message
  if (error) return <p>Error!</p>;
  return (
    <Route
      {...rest}
      render={props =>
        data.isLoggedIn === true ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: '/signin',
              state: { from: props.location }
            }}
          />
        )
      }
    />
  );
};

export default Pages;

import React from 'react';
import styled from 'styled-components';
import { useQuery } from '@apollo/client';
import { Link, withRouter } from 'react-router-dom';

import { IS_LOGGED_IN} from '../gql/query';
import UserMenu from "./UserMenu";

const HeaderBar = styled.header`
  width: 100%;
  padding: 0.5em 24em;
  display: grid;
  grid-template-columns: 1fr auto;
  height: 64px;
  position: fixed;
  align-items: center;
  background-color: #182039;
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.25);
  z-index: 1;
  color: #fff;
`;

const Menu = styled.div`
  a {
    color: white;
    padding: 10px 5px;
    margin-right: 1em;
    text-decoration: none;
    font-weight: 500;
    letter-spacing: 0.02rem;
    text-align: center;

    :hover {
      background-color: #007abc;
    }
  }
`;

const UserState = styled.div`
  margin-left: auto;
`;

const Sign = styled.p`
  font-weight: 500;
  color: white;
  display: inline;
  margin-right: 10px;
  padding: 10px 5px;

  a {
    color: white;
    text-decoration: none;
  }
   
  :hover {
    background-color: #007abc;
    cursor: pointer;
  }
`;

const Header = props => {
  // query hook for user logged in state
  const { data, client } = useQuery(IS_LOGGED_IN);

    if(props.isAdmin) {
        return (
            <HeaderBar>
                <Menu>
                    <Link to="/"> Tournament Manger 2.0 </Link>
                    <Link to="/category"> Tournaments</Link>
                    <Link to="/feed">Published Tournaments</Link>
                    <Link to="/new"> Organize Tournament </Link>
                    <Link to="/scoreCard"> Publish Score Card</Link>
                </Menu>
                {/* If logged in display a log out link, else display sign in options */}
                <UserState>
                    {data.isLoggedIn === true ? (
                        <UserMenu client={client}/>
                    ) : (
                        <div>
                            <Link to={'/signin'} style={{textDecoration: 'none'}}>
                               <Sign>Sign In</Sign>
                            </Link>or{'  '}
                            <Link to={'/signup'} style={{textDecoration: 'none'}}>
                               <Sign>Sign Up</Sign>
                            </Link>
                        </div>
                    )}
                </UserState>
            </HeaderBar>
        );
    }else{
        return(
        <HeaderBar>
            <Menu>
                {/*<img src={logo} alt="Tournament Logo" height="40" style={{padding:0 }} />*/}
                <Link to="/"> Tournament Manger 2.0 </Link>
                <Link to="/category"> Tournaments</Link>
            </Menu>
            {/* If logged in display a log out link, else display sign in options */}
            <UserState>
                {data.isLoggedIn === true ? (
                    <UserMenu client={client}/>
                ) : (
                    <div>
                        <Link to={'/signin'} style={{textDecoration: 'none'}}>
                            <Sign>Sign In</Sign>
                        </Link>or{'  '}
                        <Link to={'/signup'} style={{textDecoration: 'none'}}>
                            <Sign>Sign Up</Sign>
                        </Link>
                    </div>
                )}
            </UserState>
        </HeaderBar>
        )}
};

export default withRouter(Header);

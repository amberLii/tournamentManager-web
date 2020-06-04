import React, {useEffect} from 'react';
import {useQuery} from '@apollo/client';
import NoteTable from "../components/NoteTable";
import {GET_MY_FAVORITES,GET_ME} from '../gql/query';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import Button from '../components/Button'
const TitleStyle= styled.div`
    font: bold;
    font-size: 24px;
    display: block
`;

const Wrapper = styled.div`
  max-width: 1140px;
  margin: 0 auto;
  margin-bottom: 2em;
  padding-bottom: 2em;
  border-bottom: 1px solid #f5f4f0;
`;
const Profile = () =>{
    useEffect(() => {
        // update the document title
        document.title = 'My Profile';
    });
    const {loading, error, data } = useQuery(GET_MY_FAVORITES,GET_ME);

    if (loading) return 'Loading...';
    // if there is an error fetching the data, display an error message
    if (error) return <p>Error!</p>;
    // if the current user and the author of the note do not match
    // if (userdata.me.id !== data.note.author.id) {
    //     return <p>You do not have access to edit this note</p>;
    // }
    return(
        <React.Fragment>
            <Wrapper>
            <TitleStyle>
                User name: {data.me.username}
            </TitleStyle>
            <TitleStyle>
               Email:  {data.me.email}
            </TitleStyle>
            <Link to={`/editProfile/${data.me.id}`}>
                <Button style={{width:'130px'}}> Edit </Button>
            </Link>
           <hr />
           <h2>History</h2>
           {data.me.favorites.length ? (
           <NoteTable notes={data.me.favorites}/>
           ) : (
               <div>
                   <h3>You haven't registered to any tournaments yet </h3>
                   <Link to={'/category'}>
                       <Button>Register now</Button>
                   </Link>
               </div>
           )}
       </Wrapper>

        </React.Fragment>
)};

export default Profile;

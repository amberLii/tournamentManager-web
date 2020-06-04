import { gql } from '@apollo/client';

const NEW_NOTE = gql`
  mutation newNote($iNote: TournamentInput!) {
    newNote(note: $iNote) {
      id
      title
      desc
      createdAt
      rule
      prize
      time
      platform
      category
      maxPlayers
      favoriteCount
      favoritedBy {
        id
        username
      }
      author {
        username
        id
      }
    }
  }
`;

const EDIT_NOTE = gql`
  mutation updateNote($id:ID!, $iNote: TournamentInput!) {
    updateNote(id:$id, note: $iNote) {
      id
      title
      desc
      rule
      prize
      time
      platform
      maxPlayers
      category
      createdAt
      favoriteCount
      favoritedBy {
        id
        username
      }
      author {
        username
        id
      }
    }
  }
`;
const EDIT_PROFILE = gql`
  mutation updateProfile($id:ID!, $newName: String!){
    updateProfile(id:$id, username: $newName){
      id
      username
      email
    }
  }
`;
const DELETE_NOTE = gql`
  mutation deleteNote($id: ID!) {
    deleteNote(id: $id)
  }
`;

const TOGGLE_FAVORITE = gql`
  mutation toggleFavorite($id: ID!) {
    toggleFavorite(id: $id) {
      id
      favoriteCount
    }
  }
`;

const SIGNIN_USER = gql`
  mutation signIn($email: String, $password: String!) {
    signIn(email: $email, password: $password)
  }
`;

const SIGNUP_USER = gql`
  mutation signUp($email: String!, $username: String!, $password: String!) {
    signUp(email: $email, username: $username, password: $password)
  }
`;

export {
  NEW_NOTE,
  EDIT_NOTE,
  DELETE_NOTE,
  TOGGLE_FAVORITE,
  SIGNIN_USER,
  SIGNUP_USER,
  EDIT_PROFILE
};

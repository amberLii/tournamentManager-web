import { gql } from '@apollo/client';

const GET_NOTES = gql`
  query noteFeed($cursor: String) {
    noteFeed(cursor: $cursor) {
      cursor
      hasNextPage
      notes {
        id
        createdAt
        rule
        prize
        time
        platform
        maxPlayers
        title
        desc
        category
        favoriteCount
        author {
          username
          id
          avatar
        }
      }
    }
  }
`;
const GET_IMAGES = gql`
  query images{
    images{
      id
      imageName
      imageData
    }
  }
`;
const GET_NOTE = gql`
  query note($id: ID!) {
    note(id: $id) {
      id
      createdAt
      title
      desc
      rule
      prize
      time
      platform
      maxPlayers
      category
      favoriteCount
      author {
        username
        id
        avatar
      }
    }
  }
`;

const GET_CAT_NOTES =gql`
  query notesByCat($iCategory: String){
    notesByCat(category: $iCategory ){
      category
      id
      createdAt
      title
      desc
      rule
      prize
      time
      platform
      maxPlayers
      favoriteCount
      favoritedBy {
      username
      }
      author {
        username
        id
        avatar
      }
    }
  }
`;

const GET_MY_NOTES = gql`
  query me {
    me {
      id
      username
      notes {
        id
        createdAt
        title
        desc
        rule
        prize
        time
        platform
        maxPlayers
        category
        favoriteCount
        author {
          username
          id
          avatar
        }
      }
    }
  }
`;

const GET_MY_FAVORITES = gql`
  query me {
    me {
      id
      username
      email
      favorites {
        id
        createdAt
        title
        desc
        rule
        prize
        time
        platform
        maxPlayers
        category
        favoriteCount
        author {
          username
          id
          avatar
        }
      }
    }
  }
`;

const GET_ME = gql`
  query me {
    me {
      id
      email
      username
      favorites {
        id
      }
      isAdmin
    }
  }
`;

const IS_LOGGED_IN = gql`
  {
    isLoggedIn @client
  }
 `;

const GET_Players = gql`
  query note($id: ID!) {
    note(id: $id) {
    id
    favoriteCount
      title
      favoritedBy {
      username
      }
    }
  }
`;

export {
  GET_NOTES,
  GET_NOTE,
  GET_MY_NOTES,
  GET_MY_FAVORITES,
  GET_ME,
  IS_LOGGED_IN,
  GET_Players,
  GET_CAT_NOTES,
  GET_IMAGES
};

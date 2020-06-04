import React, { useEffect } from 'react';
import { useQuery } from '@apollo/client';

import { GET_CAT_NOTES } from '../gql/query';
import NoteTable from "../components/NoteTable";

const TournamentList = props => {
    useEffect(() => {
        // update the document title
        document.title = 'Tournament Manager';
    });
    let iCategory = props.match.params.name;
    const { loading, error, data } = useQuery(GET_CAT_NOTES,{ variables: { iCategory} });

    // if the data is loading, our app will display a loading message
    if (loading) return 'Loading...';
    // if there is an error fetching the data, display an error message
    if (error) return `Error! ${error.message}`;
    // if the query is successful and there are notes, return the feed of notes
    // else if the query is successful and there aren't notes, display a message
    return <NoteTable notes={data.notesByCat} />;

};

export default TournamentList;

import React from "react";
import {useMutation,useQuery} from "@apollo/client";

import {EDIT_PROFILE} from "../gql/mutation";
import {GET_ME} from "../gql/query";
import ProfileForm from "../components/ProfileForm";

const EditProfile = props =>{
    const id = props.match.params.id;
    const {loading,error,data} = useQuery(GET_ME);

    const [editProfile] = useMutation(EDIT_PROFILE,{
        variables:{
            id
        },
        onCompleted:()=>{
            props.history.push(`/profile`);
        }
    });
    // if the data is loading, display a loading message
    if (loading) return 'Loading...';
    // if there is an error fetching the data, display an error message
    if (error) return <p>Error!</p>;
    // pass the data and mutation to the form component
    return <ProfileForm username = {data.me.username}  email={data.me.email} action={editProfile} />;
};

export default EditProfile;



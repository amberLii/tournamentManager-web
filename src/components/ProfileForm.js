import React,{useState} from 'react';
import styled from 'styled-components';
import Button from './Button';

const Wrapper = styled.div`
  height:100%
  max-width: 1140px;
  margin: 0 auto;
  margin-bottom: 2em;
  padding-bottom: 2em;
  border-bottom: 1px solid #f5f4f0;
`;
const Title = styled.textarea`
    width: 15%;
`;

const ProfileForm = props =>{
    const [nameState, setNameState] = useState(
        {
            username: props.username || ''
        });
    const onChange = event =>{
        setNameState({
            [event.target.name]: event.target.value,
        });
    };

    return (
        <Wrapper>
            <form
                onSubmit={e => {
                e.preventDefault();
                props.action({
                    variables: {
                        newName: nameState.username
                    }
                });
            }}
            >
            <Title
                type="text"
                name="username"
                placeholder="New name"
                value={nameState.username}
                onChange={onChange}
            /> Change your name
                <br/>
                Email:  {props.email}
                <br/>
            <Button type="submit" style={{width:'130px'}}> Save </Button>

            </form>
        </Wrapper>
    );
};

export default ProfileForm;

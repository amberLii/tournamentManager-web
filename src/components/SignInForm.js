import React, { useState } from 'react';
import styled from 'styled-components';

import Button from './Button';
import {Link} from 'react-router-dom' ;
const Wrapper = styled.div`
  border: 1px solid #737373;
  border-radius: 5px;
  width: 450px;
  padding: 1.5em;
  margin: 0 auto;
`;

const Form = styled.form`
  label,
  input {
    display: block;
    line-height: 2em;
  }

  input {
    width: 100%;
    margin-bottom: 22px;
    height: 43px;
    color: #414141;
    font-weight: 500;
    padding: 12px;
    border: none;
    background-color: #f5f4f0;
    border-radius: 5px;
    outline: none;
  }
`;

const SignInForm = props => {
    // set the default state of the form
    const [values, setValues] = useState();

    // update the state when a user types in the form
    const onChange = event => {
        setValues({
            ...values,
            [event.target.name]: event.target.value
        });
    };

    return (
        <Wrapper>
            {/* Display the appropriate form header */}
            <h2 style={{ textAlign: 'center' }}>Sign In</h2>
            {/* perform the mutation when a user submits the form */}
            <Form
                onSubmit={event => {
                    event.preventDefault();
                    props.action({
                        variables: {
                            ...values
                        }
                    });
                }}
            >
                <label htmlFor="email">Email:</label>
                <input
                    required
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Email"
                    onChange={onChange}
                />
                <label htmlFor="password">Password:</label>
                <input
                    required
                    type="password"
                    id="password"
                    name="password"
                    placeholder="Password"
                    onChange={onChange}
                />
                <Link
                    // onClick={handleClick}
                    to={`/forgotPassword`}
                >
                    Forgot password? </Link>

                <Button type="submit">Submit</Button>
            </Form>
        </Wrapper>
    );
};

export default SignInForm;

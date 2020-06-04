import React, { useState} from 'react';
import styled from 'styled-components';
import Checkbox from '@material-ui/core/Checkbox';
import Button from './Button';
import Link from '@material-ui/core/Link';

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

const UserForm = props => {
  // set the default state of the form
  const [values, setValues] = useState();


  const onChange = event => {
    setValues({
      ...values,
      [event.target.name]: event.target.value
    });
  };

  return (
    <Wrapper>
      {/* Display the appropriate form header */}
      {props.formType === 'signup' ? <h2>Sign Up</h2> : <h2>Sign In</h2>}
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
        {props.formType === 'signup' && (
          <React.Fragment>
            <input
              required
              type="text"
              id="username"
              name="username"
              placeholder="username"
              onChange={onChange}
            />
          </React.Fragment>
        )}
        <input
          required
          type="email"
          id="email"
          name="email"
          placeholder="name@student.weltec.ac.nz"
          onChange={onChange}
        />
        <input
          required
          type="password"
          id="password"
          name="password"
          placeholder="Password"
          onChange={onChange}
        />
          <Checkbox
              checked={true}
              name="checkedB"
              color="Black"
          />
           I agree to the <Link href="/terms"> Terms and conditions </Link>
        <Button type="submit">Submit</Button>
      </Form>
    </Wrapper>
  );
};

export default UserForm;

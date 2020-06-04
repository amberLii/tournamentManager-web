import React, { useState } from 'react';
import styled from 'styled-components';
import Button from './Button';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: 250,
    },
}));

const Wrapper = styled.div`
  border: 1px solid #f5f4f0;
  max-width: 800px;
  margin: 0 auto;
  margin-bottom: 2em;
  padding: 2em;
  border-bottom: 1px solid #f5f4f0;
`;

const Form = styled.form`
  height: 100%;
`;

const TextArea = styled.textarea`
  width: 100%;
  height: 124px;
`;

const Title = styled.textarea`
    width: 50%;
`;

const Label = styled.label`
    display: block;
    padding: 5px;
`;

const NoteForm = props => {
  // set the default state of the form
    const classes = useStyles();

    const [pageState, setPageState] = useState(
    {
        desc: props.desc || '',
        title: props.title || '',
        rule: props.rule || '',
        prize: props.prize || '',
        time: props.time || '',
        platform: props.platform || '',
        category: props.category || '',
        maxPlayers: props.maxPlayers || ''
    });

  // update the state when a user types in the form
  const onChange = event => {
    setPageState({
      ...pageState,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <Wrapper>
      <Form
        onSubmit={e => {
          e.preventDefault();
          props.action({
            variables: {
          iNote:{...pageState}
            }
          });
        }}
      >

        <Title
              // required
              type="text"
              name="title"
              placeholder="Add Title"
              value={pageState.title}
              onChange={onChange}
          />
        <TextArea
          // required
          type="text"
          name="desc"
          placeholder="Tournament description"
          value={pageState.desc}
          onChange={onChange}
        />
          <TextArea
              type="text"
              name="rule"
              placeholder="Tournament rules"
              value={pageState.rule}
              onChange={onChange}
          />
          <Title
              type="text"
              name="prize"
              placeholder="Prize "
              value={pageState.prize}
              onChange={onChange}
          />
          <TextField
              name="time"
              label="Start Date and Time"
              type="datetime-local"
              value={(pageState.time).toString()}
              onChange={onChange}
              className={classes.textField}
              InputLabelProps={{
                  shrink: true,
              }}
          />
          <Label>
              Platform:
          <select name="platform" value={pageState.platform} onChange={onChange}>
              <option value="PC">PC</option>
              <option value="XBOX">XBOX</option>
              <option value="Console">Steam/Console</option>
              <option value="Activision">Activision</option>
          </select>
          </Label>
          <Label>
            Maximum Number of Players can join:
              <input type="number" name= "maxPlayers" step="1" value={pageState.maxPlayers} onChange={onChange}/>
          </Label>
          <Label>
              Tournament Category:
          <select name="category" value={pageState.category} onChange={onChange}>
              <option value="PUBG Mobile">PUBG Mobile</option>
              <option value="Fifa">Fifa</option>
              <option value="Fortnite">Fortnite</option>
              <option value="Six RainBow">Six RainBow</option>
          </select>
          </Label>
        <Button type="submit">Save</Button>
      </Form>
    </Wrapper>
  );
};

export default NoteForm;

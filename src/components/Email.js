import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Button from './Button';

const Wrapper = styled.div`
  height: 100%;
`;

const Form = styled.form`
  height: 100%;
`;

const MsgText = styled.textarea`
  width: 100%;
  height: 20%;
`;
const TextArea = styled.input`
  width: 20%;
`;
class Email extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            name: this.props.name,
            email: this.props.email,
            message: ''
        }
    }
    handleSubmit(e){
        e.preventDefault();
        axios({
            method: "POST",
            url:"http://localhost:3002/send",
            data:  this.state
        }).then((response)=>{
            if (response.data.status === 'success'){
                alert("Message Sent.");
                this.resetForm()
            }else if(response.data.status === 'fail'){
                alert("Message failed to send.")
            }
        })
    }

    resetForm(){
        this.setState({name:'', email: '', message: ''})
    }

    render() {
        return(
            <Wrapper>
                <Form
                    onSubmit={this.handleSubmit.bind(this)}
                    method="POST">
                    <div>
                        <label>Name: </label>
                        <TextArea
                            type="text"
                            id="name"
                            value={this.state.name }
                            disabled="disabled"
                        />
                    </div>
                    <div>
                        <label>Email address: </label>
                        <TextArea
                            type="email"
                            id="email"
                            value={this.state.email}
                            disabled="disabled"
                           />
                    </div>
                        <label>Message</label>
                        <MsgText
                            placeholder="Please copy scoreCard link here"
                            className="form-control"
                            rows="5"
                            id="message"
                            value={this.state.message}
                            onChange={this.onMessageChange.bind(this)} />

                    <Button primary type="submit">Submit</Button>
                </Form>
            </Wrapper>
        );
    }

    onNameChange(event) {
        this.setState({name: event.target.value})
    }

    onEmailChange(event) {
        this.setState({email: event.target.value})
    }

    onMessageChange(event) {
        this.setState({message: event.target.value})
    }
}

export default Email;

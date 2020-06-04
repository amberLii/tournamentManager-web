import React from 'react';
import Button from '../components/Button';
import styled from 'styled-components';

import RateReviewOutlinedIcon from '@material-ui/icons/RateReviewOutlined';
import ContactSupportOutlinedIcon from '@material-ui/icons/ContactSupportOutlined';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import YouTubeIcon from '@material-ui/icons/YouTube';

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 5vh 4vw;
  color: #182039;

  .suggestions {
    text-align: center;
    border-right: 1px solid #182039;
    padding: 0vh 4vw;

    svg {
      font-size: 4rem;
    }
  }

  .connectwithus {
    text-align: center;
    padding: 0vh 4vw;

    svg {
      font-size: 4rem;
    }

    .social-icons {
      svg {
        margin-right: 5px;
        :hover {
          color: black;
          cursor: pointer;
        }
      }
    }
  }
`;

const Heading3 = styled.h3`
  margin: 0px;
  margin-bottom: 3vh;
`;

const Para = styled.p`
  margin: 0px 0px 3vh 0px;
`;

const Form = styled.form`
  width: 100%;

  input,
  textarea {
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

const Contact = () => {
    return (
        <Wrapper>
            <div className="suggestions">
                <RateReviewOutlinedIcon />
                <Heading3>We would love to hear from you.</Heading3>
                <Para>
                    We are here to answer your questions about your Tournament Manager
                    experiences. One of our dedicated team members will respond as soon as
                    possible.
                </Para>
                <Form>
                    <input type="text" placeholder="Name" required />
                    <input type="email" placeholder="Email" required />
                    <input type="text" placeholder="Subject" />
                    <textarea
                        rows="6"
                        placeholder="Message"
                        required
                        style={{ height: '100px' }}
                    />
                    <Button type="submit">Submit</Button>
                </Form>
            </div>
            <div className="connectwithus">
                <ContactSupportOutlinedIcon />
                <Heading3>Connect with us.</Heading3>
                <Para>
                    Click any social media icon to connect with us on the given below
                    social media services.
                </Para>
                <div className="social-icons">
                    <TwitterIcon />
                    <YouTubeIcon />
                    <FacebookIcon />
                    <InstagramIcon />
                </div>
            </div>
        </Wrapper>
    );
};

export default Contact;

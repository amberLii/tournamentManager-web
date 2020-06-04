import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import YouTubeIcon from '@material-ui/icons/YouTube';

const FooterContent = styled.footer`
  width:100%
  padding: 0.5em 24em;
  height: 85px;
  grid-template-columns: auto auto;
  display: grid;
  bottom:0;
  background-color: #182039;
  color: white;
  position: fixed;
  align-items: center;
   box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.25);
  z-index: 1;

  .footer-left {
    display: grid;
    grid-template-columns: auto 1fr;
    grid-gap: 2vw;
    justify-self: left;
    align-self: center;

    a {
      color: white;
    }
  }

  .footer-right {
    display: grid;
    grid-template-columns: auto 1fr;
    grid-gap: 2vw;
    justify-self: right;
    align-self: center;

    a {
      color: white;
    }
  }

  .footer-icons {
    margin-top: 15px;

    a {
      color: white;
      margin-right: 10px;
    }
    svg {
      font-size: 1.5rem;
    }
  }
`;

const Footer = () => {
    return (
        <FooterContent>
            <div className="footer-left">
                <Link to="/contact">Contact Us</Link>
                <Link to="/about">About Us</Link>
            </div>
            <div className="footer-right">
                <Link to="/policy">Privacy Policy</Link>
                <Link to="/terms">Terms & Conditions</Link>
            </div>
            <div className="footer-icons">
                <Link to="facebook.com">
                    <FacebookIcon />
                </Link>
                <Link to="twitter.com">
                    <TwitterIcon />
                </Link>
                <Link to="youtube.com">
                    <YouTubeIcon />
                </Link>
                <Link to="instagram.com">
                    <InstagramIcon />
                </Link>
            </div>
        </FooterContent>
    );
};

export default Footer;

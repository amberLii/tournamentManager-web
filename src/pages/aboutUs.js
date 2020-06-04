import React from 'react';
import styled from 'styled-components';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';

const Wrapper = styled.div`
  padding: 5vh 4vw;
  color: #182039;
  text-align: center;
`;

const Heading3 = styled.h3`
  margin: 0px 0px 3vh 0px;
`;

const Heading4 = styled.h4`
  margin: 0px 0px 3vh 0px;
`;

const Para = styled.p`
  margin: 0px 0px 3vh 0px;
`;

const About = () => {
    return (
        <Wrapper>
            <InfoOutlinedIcon style={{ fontSize: '4rem' }} />
            <Heading3>About Tournament Manager 2.0</Heading3>
            <Heading4>Who we are?</Heading4>
            <Para>
                We’re a portal for gamers to discover diverse communities, unforgettable
                experiences, and extraordinary opportunities. We’ve welcomed gamers of
                all ages, backgrounds and skills; and now we’re ready for you.
            </Para>
            <Heading4>What do we do?</Heading4>
            <Para>
                WorldGaming Network is the starting line for a path to the Pros. This is
                can be a playground or training ground; the choice is yours. Our
                platform is designed for gamers to connect, compete and have fun. For
                free. Every week. If winning was easy it’d be worth nothing, which is
                why we remind our players to <strong>KEEP ON GAMING</strong>.
            </Para>
        </Wrapper>
    );
};

export default About;

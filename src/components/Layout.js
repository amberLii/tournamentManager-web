import React from 'react';
import styled from 'styled-components';

import Header from './Header';
import Footer from "./Footer";

// component styles
const Wrapper = styled.div`
  /* We can apply media query styles within the styled component */
  /* This will only apply the layout for screens above 700px wide */
  @media (min-width: 700px) {
    display: flex;
    top: 64px;
    position: relative;
    height: calc(100% - 64px);
    width: 100%;
    flex: auto;
    flex-direction: column;
    border: 1px solid black
  }
`;

const Main = styled.main`
  position: fixed;
  height: calc(100% - 185px);
  width: 100%;
  padding: 1em;
  overflow-y: scroll;
  
  .main-content {
    min-height: 100% !important;
    margin-bottom: -85px;
    padding-bottom: 85px;
  }

  /* Again apply media query styles to screens above 700px */
  @media (min-width: 700px) {
    flex: 1;
    height: calc(100% - 64px);;
    width: calc(100%);
  }
`;

const Layout =  props =>{
    console.log("props isAdmin:");
    console.log(props.isAdmin);

  return (
    <React.Fragment>
        <Header isAdmin={props.isAdmin}/>
        <Wrapper>
            <Main>
                <div className="main-content">
                    {props.children}
                </div>
            </Main>
        </Wrapper>
        <Footer/>
    </React.Fragment>
  );
};

export default Layout;

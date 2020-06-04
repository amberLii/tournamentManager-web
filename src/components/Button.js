import styled from 'styled-components';

const Button = styled.button`
height: 43px;
width: 100%;
margin-top: 22px;
margin-bottom: 22px;
border-radius: 5px;
border: none;
background:${props=> props.primary ? '#3f51b5' : '#182039'} ;
opacity: 1;
font-weight: 500;
color: white;
cursor: pointer;

  :hover {
    opacity: 0.9;
  }

  :active {
    background-color: #005fa3;
  }
`;

export default Button;

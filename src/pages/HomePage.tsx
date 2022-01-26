import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components'
import BackgroundImage from '../assets/background-main.png'


const Main = styled.main<{ image: string }>`
width: 100vw;
height: 100vh;
background-image: url(${BackgroundImage});
margin: 0;
display: flex;
flex-direction: column;
align-items: center;
`

const LinksRow = styled.header`
height: 15vh;
display: flex;
align-items: center;
justify-content: center;

span{
  margin: 0 3rem;
  font-size: 32px;
  border-bottom: solid 0.1px transparent;
  transition: all .3s linear;
  cursor: pointer;
  
  :hover{
    border-bottom: solid 2px;
  }

}

`
const TitleRow = styled.div`
height: 28vh;

display: flex;
align-items: center;
/* background-color: red; */

  & h1{
    font-size: 100px;
    font-weight: 400;
  }
`

function HomePage() {
  return (
    <Main className="App" image={BackgroundImage}>
      <LinksRow>
        <Link to="/list" style={{ color: "inherit", textDecoration: "none" }}><span>Lista Presentes</span></Link>
        {/* <Link to="/us" style={{ color: "inherit", textDecoration: "none" }}><span>Nossa História</span></Link> */}
        <Link to="/wedding" style={{ color: "inherit", textDecoration: "none" }}><span>O Evento</span></Link>
      </LinksRow>
      <TitleRow><h1>Jeci e Bruno</h1></TitleRow>
    </Main>
  );
}

export default HomePage;

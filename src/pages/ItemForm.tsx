import { useContext } from "react"
import styled from "styled-components"
import backgroundImage from '../assets/background-list.png'
import { ItemContext } from "../Contexts/ItemContext"


const Frame = styled.div`
background-image:url(${backgroundImage});
opacity: 1;
width: 100vw;
height: 100vh;
margin: 0;
display: flex;
flex-direction: column;
`
const Header = styled.header`
height: 25vh;
color: #F5B47A;
display: flex;
flex-direction: column;
justify-content: center;

h1,h2 {
    font-weight: 400;
    margin: 0 5vw
    
}

h1{
    font-size: 64px;
}
h2{
    font-size: 40px;
}
`

const Main = styled.main`
display:flex;
align-items:center;
justify-content:space-evenly;

`

const ItemInfo = styled.div`
border: solid 2px #F5B47A;
width:30vw;
height:50vh;
border-radius: 5px;
color:#F5B47A;

`

const ReservationForm = styled.div`

border: solid 2px #F5B47A;
width:35vw;
height:50vh;
border-radius: 5px;

`

export default function ItemList() {

    const { itemData } = useContext(ItemContext)

    const modelos = ["1", '2', '3', '4']

    return (
        <Frame>
            <Header>
                <h1>Jeci e Bruno</h1>
                <h2>Lista de Presentes</h2>
            </Header>
            <Main>
                <ItemInfo>
                    <h3>{itemData?.name}</h3>
                    <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna dignissim egestas in sapien, vel. Massa diam</span>
                    <div>
                        {modelos.map((link, index) => <a key={index} href={link}>Modelo {index + 1}</a>)}
                    </div>
                </ItemInfo>
                <ReservationForm>
                    <h3>Reservar Presente</h3>
                    <input type="text" placeholder="Nome Completo" />
                    <input type="text" placeholder="Celular" />
                    <input type="text" placeholder="Email" />
                    <div>
                        <input type="radio" name="compra" id="" />
                        <input type="radio" name="compra" id="" />
                    </div>
                    <button>Reservar</button>
                </ReservationForm>
            </Main>
        </Frame>
    )
}
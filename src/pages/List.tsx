import { useContext } from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"
import backgroundImage from '../assets/background-list.png'
import { ItemContext } from "../Contexts/ItemContext"

const data = ["Geladeira", "Chaleira Elétrica", "Cafeteira", "Liquidificador", "Jogo de Panelas", "Jogo de Talheres"]


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

const Tables = styled.div`
height: 75vh;
display: flex;
justify-content: space-evenly;
`

const TableFrame = styled.div`
display: flex;
flex-direction:column;
height: 80%;
width: 15vw;
border: solid 2px #F5B47A;
border-radius: 5px;
color:#F5B47A ;
font-family: Poiret One;

li {
    font-size: 24px;
    padding:.5rem 0;
    padding-left: 1.5rem;
    transition: background-color .3s;
    cursor: pointer;
    color:#F5B47A ;
    
    :hover{
        background-color: #F5B47A1D;
    }
}
`

const TableTitle = styled.div`

display: flex;
align-items: center;
padding:0 1rem; 
font-size: 24px;
font-family: Nothing You Could Do,cursive;
height: 5vh;
background-color: #F5B47A0D;
border-bottom: solid 2px #F5B47A;
margin-bottom: 3vh;
`





export default function List() {

    const { itemData, setItemData } = useContext(ItemContext)

    const Table = ({ title = "", setData }: { title: string, setData: Function }) => {
        return (
            <TableFrame>
                <TableTitle>{title}</TableTitle>
                {data.map((value) => <Link to={"item"} style={{ textDecoration: "none" }}><li onClick={() => setData({ ...itemData, name: value })}>{value}</li></Link>)}
            </TableFrame>
        )
    }



    return (
        <Frame>
            <Header>
                <h1>Jeci e Bruno</h1>
                <h2>Lista de Presentes</h2>
            </Header>
            <Tables>
                <Table title="Cozinha" setData={setItemData} />
                <Table title="Sala de Estar" setData={setItemData} />
                <Table title="Quarto" setData={setItemData} />
                <Table title="Geral" setData={setItemData} />
            </Tables>
        </Frame>
    )
}
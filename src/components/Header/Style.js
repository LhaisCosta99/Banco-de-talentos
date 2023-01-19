import styled from "styled-components";

export const HeaderStyle = styled.header`
    background-color: #dcdcdc;
    display: flex;
    flex-direction: column;
    width: 100%;
    height: max-content;
    align-items: center;
    justify-content: center;
    div{
        display: flex;
        width: 100%;
        justify-content: space-around;
        height: 100px;
        div{
            display: flex;
            justify-content: space-around;
            align-items: center;
        }
    }
    h1{
        color: #272727;
        font-family: 'Star Wars', sans-serif;
        text-align: center;
    }
    img{
        width: 100px;
    }
    .barra-de-pesquisa{
        display: flex;
        justify-content: center;
        width: 50%;
    }
    input{
        border-radius: 5px;
        padding: 5px;
    }
    .pesquisar{
        width: 25px;
        margin: 5px;
    }
    nav{
        display: flex;
        width: 100%;
        justify-content: space-around;
        align-items: center;
        background-color: #666666;
        height: 30px;
        li{
            list-style: none;
            text-align: center;
            color: #dcdcdc;
            font-weight: bolder;
            cursor: pointer;
        }
    }
    @media (max-width: 720px) {
        div{
            flex-direction: column;
            height: fit-content;
            align-items: center;
            div{
                flex-direction: row;
                justify-content: center;
                width: 70%;
            }
        }
        .barra-de-pesquisa{
            width: 100%;
            margin-bottom: 10px;
        }
        img{
            width: 80px;
        }
        nav{
            flex-direction: column;
            height: fit-content;
            li{
                margin: 5px 0;
            }
        }
    }
`
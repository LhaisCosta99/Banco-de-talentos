import styled from "styled-components";

export const HeaderStyle = styled.header`
    background-color: #272727;
    display: flex;
    width: 100%;
    height: 100px;
    align-items: center;
    justify-content: flex-start;
    div{
        display: flex;
        width: 40%;
        justify-content: flex-start;
    }
    h1{
        color: #ffc340;
        font-family: 'Star Wars', sans-serif;
        text-align: center;
    }
    img{
        margin-left: 20px;
        width: 100px;
    }
`
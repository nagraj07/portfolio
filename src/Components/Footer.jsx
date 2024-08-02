import React from "react";
import { PhoneOutlined, CommentOutlined } from "@ant-design/icons";
import styled from "styled-components";

const Container = styled.div`
    color:white;
    padding:20px;
    padding-bottom:100px;
    background-color:#333333;
`;

const Title = styled.h2`
    color:white;
    text-align:center;
    font-size:2.5rem;
    padding:20px
`;

const Buttons = styled.div`
    padding-left:0%;
    display:flex;
    flex-wrap:wrap;
    justify-content:space-evenly;
`;

const Button = styled.button`
    align-contents:center;
    width:150px;
    height:40px;
    font-size:1rem;
    cursor:pointer;
    border-radius:10px;
    background-color:orange;
    transition: background 0.3s, color 0.3s;


    &:hover{
        background:darkorange;
        color:gray;
    }


`;

const Footer = () => {
    return (
        <Container id="footer">
            <Title>Contact Me</Title>
            <Buttons>
                <a href="https://wa.me/7975521912" target="_blank" rel="noopener noreferrer"><Button><PhoneOutlined /> 7975521912</Button></a>
                <a href="https://www.instagram.com/nagraj__07_" target="_blank" rel="noopener noreferrer"><Button><CommentOutlined /> nagraj__07_</Button></a>
                <a href="https://www.facebook.com/nagaraj.hajagolkar.1" target="_blank" rel="noopener noreferrer"><Button>Facebook</Button></a>
            </Buttons>
        </Container>
    );
}

export default Footer;
import React from "react";
import styled from "styled-components";
import { WhatsAppOutlined, FacebookFilled, TwitterOutlined, InstagramOutlined } from "@ant-design/icons";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 27%;
    padding-left:45%;
    color: white;
    font-size: 1.5rem;

    a {
        color: inherit; // inherit color from parent
        margin: 10px 0;
        text-decoration: none;

        &:hover {
            color: #00ff00; // change color on hover, for example
        }
    }
`;

const Sidemenu = () => {
    return (
        <Container>
            <a href="https://www.facebook.com/nagaraj.hajagolkar.1" target="_blank" rel="noopener noreferrer">
                <FacebookFilled />
            </a>
            <a href="https://twitter.com/nagraj__07_" target="_blank" rel="noopener noreferrer">
                <TwitterOutlined />
            </a>
            <a href="https://www.instagram.com/nagraj__07_" target="_blank" rel="noopener noreferrer">
                <InstagramOutlined />
            </a>
            <a href="https://wa.me/7975521912" target="_blank" rel="noopener noreferrer">
                <WhatsAppOutlined />
            </a>
        </Container>
    );
}

export default Sidemenu;


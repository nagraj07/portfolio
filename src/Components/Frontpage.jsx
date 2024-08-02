import React from "react";
import { Link } from "react-scroll";
import styled from "styled-components";
// import { Link } from "react-scroll";

const Container = styled.div`
    padding:150px 300px 20px 250px;
`;
const P = styled.pre`
    font-family:sans-serif;
    font-size:2rem;
    color:white;
`;

const B = styled.text`
    font-size:3rem;
    color:orange;    
`;

const UI = styled.p`
 margin-left:5px;
 font-size:1.5rem;
 color:indigo;
//  background-color:dimgray;
`;

const H = styled.h4`
    font-size:1rem;
    margin-bottom:0px;
    margin-left:10px;
`;

const Button = styled.button`
    border:2px solid orange;
    font-size:1rem;
    padding:10px;
    align-item:center;
    color:orange;
    background:transparent;
    border-radius:10px;
`;

const Frontpage = () => {


    return (
        <>
            <Container>
                <P><H>Hello,</H> I'M <B>WEB</B> Dev
                    <UI>UI/UX Designer</UI></P>
                <Link to="footer" smooth={true} duration={500}>
                    <Button>Contact Me</Button>
                </Link>
            </Container>
        </>
    );
}

export default Frontpage;
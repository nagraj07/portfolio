import React from "react";
import styled from "styled-components";

const Container = styled.div`
    padding:10px 0px 0px 0px;
    color:white;
    // display:flex;
    background:#444444;
    
`;

const Title = styled.h1`
    color:white;
    text-align:center;
    font-size:2.5rem;
    padding:20px   
`;

const Imgcontainer = styled.div`
    display:flex;
    flexwrap:wrap;
    justify-content:space-between;
    padding:30px;
    // background:black;
`;

const Image = styled.div`
    background-color:Gray;
    width:250px;
    align-content:center;
    border: 1px solid black;
    border-radius:15px;
    cursor:pointer;
    transition: background 0.3s, color 0.3s;
    

    &:hover{
        background-color:darkgray;
    }
`;

const Subtitle = styled.h3`
    text-align:center;
`;

const P = styled.pre`
    
    img{
        width:200px;
        margin-left:25px;
        border:1px solid black;
        border-radius:10px;
        // color:blue;
    }
`;

const Myskills = () => {
    return (
        <Container id="myskills">
            <Title>My Skills</Title>
            <Imgcontainer>
                <Image>
                    <P><img src="./Images/html.png" alt="HTML" /></P>
                    <Subtitle>HTML</Subtitle>
                </Image>
                <Image>
                    <P><img src="/Images/css.png" alt="CSS" /></P>
                    <Subtitle>CSS</Subtitle>
                </Image>
                <Image>
                    <P><img src="/Images/javasript.png" alt="JAVASRIPT" /></P>
                    <Subtitle>JAVASCRIPT</Subtitle>
                </Image>
                <Image>
                    <P><img src="/Images/react.png" alt="REACT" /></P>
                    <Subtitle>REACT</Subtitle>
                </Image>
                <Image>
                    <P><img src="/Images/mongodb.png" alt="MONGODB" /></P>
                    <Subtitle>MONGODB</Subtitle>
                </Image>
            </Imgcontainer>
        </Container>
    );
}

export default Myskills;
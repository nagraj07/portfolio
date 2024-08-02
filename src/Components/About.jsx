import React from "react";
import styled from "styled-components";

const Container = styled.div`
    color:white;
    // font-size:3rem;
    padding:20px 20px 100px 40px;
    background-image:url("./Images/aboutbgimg.jpeg");
    background-size:cover;
    opacity:1px;
    // margin-top:30px;
`;

const Title = styled.h1`
    color:white;
    font-size:3rem;
`;

const P = styled.pre`
    font-size:1rem;
    font-family:Georgia, serif;
    padding: 0px 0px 0px 70px;
`;

const About = () => {
    return (
        <Container id="about">
            <Title>About</Title>
            <P>Hi, I'm Nagraj Hajagulkar, a Bachelor of Computer Applications (BCA) student passionate about learning to build web applications.<br />Currently, I'm diving into HTML, CSS, and JavaScript to create interactive websites. I enjoy exploring new technologies and<br />experimenting with different web development tools. My goal is to become proficient in front-end development and eventually<br />learn back-end technologies as well. When I'm not studying or coding, I like to read tech blogs and participate in coding challenges.<br />I'm excited about the journey ahead and eager to grow my skills in web development!


            </P>
        </Container>
    );
}

export default About;
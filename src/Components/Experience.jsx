import React from "react";
import styled from "styled-components";

const Container = styled.div`
    padding:50px 20px 100px 40px;
    color:white;
    background:#4d4d4d;
`;
const Title = styled.h3`
    color:white;
    font-size:3rem;
`;
const Details = styled.div`

`;

const Design = styled.div`

`;
const Text = styled.div`
    padding-left:80px;
`;

const Subtitle = styled.h4`
    color: white;
    font-size: 1.6rem;
`;

const Experience = () => {
    return (
        <Container>
            <Title>Experience</Title>
            <Details>

                <Design>

                </Design>
                <Text>
                    <Subtitle> WEB Developer</Subtitle>
                    <p >As a Bachelor of Computer Applications (BCA) student, I have been actively building my web development skills through various projects and learning opportunities.<br />I have developed several interactive websites using HTML, CSS, and JavaScript, which have given me a solid foundation in front-end development and responsive design.<br />                    Working on collaborative projects with classmates has improved my teamwork skills.
                        Additionally, I enjoy reading and contributing to tech blogs,<br />which helps me share knowledge and stay connected with the web development community.<br />I am excited to continue expanding my expertise in both front-end and back-end development as I progress in my studies.
                    </p>
                </Text>

            </Details>
        </Container>

    );
}

export default Experience;
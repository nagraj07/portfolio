import React from "react";
import styled from "styled-components";
import { Link } from "react-scroll";

const Navbar = styled.div`
    display:flex;
    flexwrap:wrap;
    justify-content: space-around;
    width:100%;
    font-size:0.5rem;
    // background-color:blue;
    padding-top:40px;
    color:white;
`;

const Navlink = styled.a`
    cursor: pointer;
    font-size: 1rem;
`;

const Header = () => {
    return (
        <>
            <Navbar>
                <Navlink style={{ marginRight: "27%" }}><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQH1rWvuiQFxQpEIL218odw8XdAS08_84efzg&s" alt="Logo" style={{ width: "80px", height: "25px", borderRadius: "10px" }} /></Navlink>
                <Navlink>
                    <Link to="about" smooth={true} duration={500}>About</Link>
                </Navlink>
                <Navlink>
                    <Link to="myskills" smooth={true} duration={500}>My Skills</Link>
                </Navlink>
                <Navlink style={{ marginRight: "20%" }}>
                    <Link to="footer" smooth={true} duration={500}>Contact</Link>
                </Navlink>

                <input type="text" placeholder="Search" style={{ width: "20%", height: "10%", marginTop: "10px", fontSize: "1.1rem", padding: "3px", border: "1px solid black", borderRadius: "10px", backgroundColor: "white" }} />
            </Navbar>
        </>
    );
}

export default Header;
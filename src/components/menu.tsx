import { useState } from "react"
import logo from "../img/logo.png";
import ham from "../img/hamburgare.png";
import { Nav, NavBar } from "./styled/header";
import { Logo } from "./styled/img";
import { A } from "./styled/link"

import { DivMenu } from "./styled/section";
import { Img } from "./styled/button";


export function Menu() {


    const [navbarOpen, setNavbarOpen] = useState(false)
    function handleToggle() {
        setNavbarOpen(!navbarOpen)
    }
    return (<>
        <Nav>
            <Logo src={logo}></Logo>
            <Img  src={ham} onClick={handleToggle}/>
            {navbarOpen && <DivMenu ><A href="/">Home</A>
                <A href="#skills">Erfarenhet</A>
                <A href="#portfolio">Portfolio</A>
                <A href="#contact">Kontakta</A>
            </DivMenu>}
        </Nav>
   
        <NavBar >
                <A href="/">Home</A>
                <A href="#skills">Erfarenhet</A>
                <Logo src={logo}></Logo>
                <A href="#portfolio">Portfolio</A>
                <A href="#contact">Kontakta</A>
       
        </NavBar>
    
    </>)
}
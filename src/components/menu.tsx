import { useState } from "react"
import logo from "../components/assets/logo.png";
import ham from "../components/assets/hamburgare.png";
import { Img, Logo } from "./styled/img";
import { A } from "./styled/link"
import { Nav, NavBar } from "./styled/nav";
import { DivMenu } from "./styled/div";
import { XB } from "./styled/button";


export function Menu() {


    const [navbarOpen, setNavbarOpen] = useState(false)
    function handleToggle() {
        setNavbarOpen(!navbarOpen)
    }
    function scroll(){

    }
    return (<>
        <Nav>
            <Logo src={logo}></Logo>
            <Img  src={ham} onClick={handleToggle}/>
            {navbarOpen && <DivMenu >
                <XB onClick={handleToggle}>X</XB>
                <A onClick={scroll} href="#home">Home</A>
                <A onClick={scroll} href="#skills">Erfarenhet</A>
                <A onClick={scroll} href="#portfolio">Portfolio</A>
                <A onClick={scroll} href="#contact">Kontakta</A>
            </DivMenu>}
        </Nav>
   
        <NavBar >
                <A onClick={scroll} href="#home">Home</A>
                <A onClick={scroll} href="#skills">Erfarenhet</A>
                <Logo src={logo}></Logo>
                <A onClick={scroll} href="#portfolio">Portfolio</A>
                <A onClick={scroll} href="#contact">Kontakta</A>
       
        </NavBar>
    
    </>)
}


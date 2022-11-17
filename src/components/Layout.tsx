
import { Contact, Footer } from "./styled/footer";
import { Header, HeaderDiv } from "./styled/header";
import { ImgLeaf, ImgMe } from "./styled/img";
import { A } from "./styled/link";
import { H2,  P } from "./styled/text";
import me from "../img/profilbild.jpg"
import  leaf from "../img/leaf.jpg";
import { Home } from "./Home";
import { Education } from "./education";
import { Portfolio } from "./Portfolio";
import { useState } from "react";
import { Menu } from "./menu";
import { Construct } from "./styled/div";


export function Layout() {
    const [navBar, setNavBar] = useState(true)

    return (<>
        <Header id="home">
     
            <HeaderDiv>
          <ImgLeaf src={leaf}></ImgLeaf>
            
               <Menu/>
               <Construct>Under Construction</Construct>
            </HeaderDiv>
        </Header>
        <Home/>
        <Education/>
        <Portfolio/>
        <Contact/>
      
        <Footer id="contact">
        <H2>Kontakta</H2>
            <Contact>
                <ImgMe src={me} />
                <P>Therese Rosvall<br />
                    Therese.rosvall@hotmail.se<br />
                    0704664185</P>

                <P>Github:<br />
                    <A href="https://github.com/Eraze86">https://github.com/Eraze86</A></P>
                <P>Linkedin:<br />
                    <A href="https://www.linkedin.com/in/therese-rosvall">https://www.linkedin.com/in/therese-rosvall</A></P>

            </Contact>
        </Footer>
    </>)

}
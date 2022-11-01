import { Outlet } from "react-router-dom";
import { Contact, Footer } from "./styled/footer";
import { Header, Nav } from "./styled/header";
import { ImgMe } from "./styled/img";
import { LinkNav } from "./styled/link";
import { A, H1, H2, H3Lia, P } from "./styled/text";
import me from "../img/profilbild.jpg"
import { ArticleLia, Section } from "./styled/section";


export function Layout() {
    return (<>
        <Header>
            <H1>Therese Rosvall</H1>
            <Nav>
                <LinkNav to="/">Home</LinkNav>
                <LinkNav to="/education">Education</LinkNav>
                <LinkNav to="/portfolio">Portfolio</LinkNav>

            </Nav>
            <Section>
                <ArticleLia>
                    <H3Lia>Söker LIA 13 feb - 2 jun 2023<br />
                        Trelleborg/Malmö/Distans </H3Lia>
                </ArticleLia>
            </Section>
        </Header>
        <Outlet></Outlet>
      
        <Footer>
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
import {  A, ArticleCon, P1, Section } from "./styled/section";
import Me from "../img/profilbild.jpg"
import { ImgMe } from "./styled/img"

export function Contact(){
    return(<>
    <Section>
    <ArticleCon>
    <ImgMe src={Me}/>
        <p>Github:</p>
        <A href="https://github.com/Eraze86">https://github.com/Eraze86</A><br/><br/>
        <p>LinkedIn:</p>
    <A href="https://www.linkedin.com/in/therese-rosvall">https://www.linkedin.com/in/therese-rosvall</A>

<p>Tel: </p>
    <P1>0704664185 </P1>
        <p>Mail:</p>
    <P1>Therese.rosvall@hotmail.se  </P1>
      
    </ArticleCon>
    </Section>
    </>)

}
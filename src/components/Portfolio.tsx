import AB from "../img/css1.png"
import B from "../img/css2.png"
import C from "../img/css3.png"
import A1 from "../img/A1.png"
import A2 from "../img/A2.png"
import A3 from "../img/A3.png"
import A4 from "../img/A4.png"
import L1 from "../img/L1.png"
import L2 from "../img/L2.png"
import L3 from "../img/L3.png"
import R1 from "../img/R1.png"
import R2 from "../img/R2.png"
import R3 from "../img/R3.png"
import H1 from "../img/H1.png"
import H2 from "../img/H2.png"
import H3 from "../img/H3.png"
import H4 from "../img/H4.png"
import K1 from "../img/K1.png"
import K2 from "../img/K2.png"
import { ImgPort } from "./styled/img"
import { Div, SectionPort } from "./styled/section"
import { A } from "./styled/link"


//loppa igenom istället, måste fixa
export function Portfolio() {

    function bigPic(){

    }

    return (<>
 
    <SectionPort id="portfolio">
    <Div>
        <A href="https://cubic-calculator.vercel.app/">Kubikräknare</A>
        <ImgPort src={K1} />
        (Sammarbete med Mikaela)
    </Div>
    <Div>
    <A href="https://github.com/Eraze86/hemmaodla">HemmaOdlat</A>
        <ImgPort src={H2} />
        Eget projekt 
    </Div>
    <Div>
        Css och Sass uppgift
        <ImgPort src={AB} />
    </Div>
    <Div>
    <A href="https://github.com/Eraze86/angular-webshop">Angular webshop</A><br/>
    <ImgPort src={A1} />
    </Div>
    <Div>
    <A href="https://github.com/Eraze86/notes">My-SQL databas</A><br/>
    <ImgPort src={L1} />
    </Div>
    <Div>
    <A href="https://github.com/Eraze86/react-restaurang">React - resturang</A><br/>
    <ImgPort src={R1} />
    Jobbade i Team
    </Div>
        </SectionPort>
    </>)

}
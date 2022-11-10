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
import {  ArticlePort, SectionPort } from "./styled/section"
import { A } from "./styled/text"

//loppa igenom istället, måste fixa
export function Portfolio() {
    return (<>
 
    <SectionPort>
        <h3>Kubikräknare , sammarbeta med Mikaela</h3>
            <A>https://cubic-calculator.vercel.app/</A>
            <ArticlePort>
                <ImgPort src={K1} />
                <ImgPort src={K2} />

            </ArticlePort>
            </SectionPort>
        <SectionPort>
        <h3>Eget projekt</h3>
            <A>https://github.com/Eraze86/hemmaodla</A>
            <ArticlePort>
                <ImgPort src={H1} />
                <ImgPort src={H2} />
                <ImgPort src={H3} />
                <ImgPort src={H4} />
            </ArticlePort>
            </SectionPort>
            <SectionPort>
            <h3>css och Sass</h3>
                En övning i css/sass<br/>
            <ArticlePort>
                       <ImgPort src={AB} />
                <ImgPort src={B} />
                <ImgPort src={C} />
            </ArticlePort>
            </SectionPort>
            <SectionPort>
            <h3>Angular Webshop</h3>
                <a>https://github.com/Eraze86/angular-webshop</a><br/>
            <ArticlePort>

                <ImgPort src={A1} />
                <ImgPort src={A2} />
                <ImgPort src={A3} />
                <ImgPort src={A4} />
            </ArticlePort>
            </SectionPort>
            <SectionPort>
            <h3>Databaser my-SQL</h3>
                <a>https://github.com/Eraze86/notes</a><br/>
            <ArticlePort>

                <ImgPort src={L1} />
                <ImgPort src={L2} />
                <ImgPort src={L3} />
            </ArticlePort>
            </SectionPort>
            <SectionPort>
            <h3>Restaurang - Jobbade i team</h3>
                <a>https://github.com/Eraze86/react-restaurang</a><br/>
            <ArticlePort>
 
                <ImgPort src={R1} />
                <ImgPort src={R2} />
                <ImgPort src={R3} />
            </ArticlePort>
        </SectionPort>
    </>)

}
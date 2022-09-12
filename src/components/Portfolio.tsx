import A from "../img/css1.png"
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
import { ImgPort } from "./styled/img"
import { Article, Section } from "./styled/section"


export function Portfolio() {
    return (<>
        <Section>
        <Article>
                <h3>Eget projekt</h3>
                Styled-compnents i react och några enstaka functioner<br/>
                <a>https://github.com/Eraze86/hemmaodla</a>

                <ImgPort src={H1} />
                <ImgPort src={H2} />
                </Article>
                <Article>
                <ImgPort src={H3} />
                <ImgPort src={H4} />
            </Article>
</Section>
<Section>
            <Article>
                <h3>css och Sass</h3>
                En övning i css/sass<br/>

                <ImgPort src={A} />
                <ImgPort src={B} />
                <ImgPort src={C} />
            </Article>
            <Article>
                <h3>Angular Webshop</h3>
                <a>https://github.com/Eraze86/angular-webshop</a>
                <ImgPort src={A1} />
                <ImgPort src={A2} />
                <ImgPort src={A3} />
                <ImgPort src={A4} />
            </Article>
            </Section>
            <Section>
            <Article>
                <h3>Databaser my-SQL</h3>
                <a>https://github.com/Eraze86/notes</a>
                <ImgPort src={L1} />
                <ImgPort src={L2} />
                <ImgPort src={L3} />
            </Article>

            <Article>
                <h3>Restaurang - Jobbade i team</h3>
                <a>https://github.com/Eraze86/react-restaurang</a>
                <ImgPort src={R1} />
                <ImgPort src={R2} />
                <ImgPort src={R3} />
            </Article>
        </Section>
    </>)

}
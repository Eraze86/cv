import { ArticleFront, Section, SectionEd } from "./styled/section";
import { H4 } from "./styled/text";

export function Education() {
    return (<>
        <SectionEd>
            <ArticleFront>
                <h3>Utbildning</h3>
                <ul>
                    <H4>Frontend developer H2021 - V2023</H4>
                    <li>Html,Css , Sass</li>
                    <li>Javascript</li>
                    <li>React</li>
                    <li>Angular</li>
                    <li>APIutveckling</li>
                    <li>Agiltprojektarbete</li>
                    <li>Arbetsmetodik för utvecklare</li>
                    <li>UX/Usability</li><br/>

                    <H4>Webutveckling I V2021</H4>
                    <H4>Företagsekonomi GR (A)
                        Ekonomistyrning V2021
                        Organisation och ledarskap V2021</H4>
                    <H4>Räkna med lönsamhet H2020</H4>
                    <H4>Astronomi, orienteringskurs H2020</H4>
                    <H4>Företagsekonomi, information och kommunikation V2020</H4>
                    <H4>Hotell & restaurang H2007-V2009</H4>
                    <H4>Webdesign, desktop - Information & layout V2009</H4>
                </ul>
            </ArticleFront>
            <ArticleFront>
                <h3>Erfarenhet</h3>
                <ul>
                    <H4>Pottan AB  (Tidigare Godsinlösen) 2013-Nutid</H4>
                        <li>Service, försäljning, bagagehantering, lokalvårdare m.m.</li><br/>
                    <H4>Kock 2008-2012</H4>
                    <li>Arbetade på diverse skolor</li><br/>
                    <H4>Tidigare Arbeten</H4>
                    <li>butikspersonal etc.</li><br/>
                </ul>
            </ArticleFront>

        </SectionEd>

    </>)

}
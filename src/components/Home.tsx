


import { Section, ArticleFront, ArticleLia, ArticleAboute } from "./styled/section"
import { H3, H2 } from "./styled/text"
export function Home() {

  return (<>

    <Section>
      <ArticleLia>
        <H3>Söker LIA 1<br />24 Okt - 31 Dec<br/>
          Trelleborg/Malmö/Distans </H3>
      </ArticleLia>
    </Section>
    <Section>
      <ArticleFront>
        <H2>Frontend Utvecklare</H2>
        Utbildar mig till frontend utvecklare via Medieinstitutet.
        Jag älskar lättorienterade hemsidor som alla kan förstå.
        Vid LIA:ns start har jag lärt mig:
        <ul>
          <li>Html</li>
          <li>Css</li>
          <li>Sass</li>
          <li>Java-script</li>
          <li>React</li>
          <li>Angular</li>
          <li>Typescript</li>
          <li>Agilametoder</li>
          <li>Dynamisk design (API, Backend)</li>
          <li>Arbetsmetodik</li>
          <li>Grafiska verktyg för gränssnittsdesign</li>
          <li>UX/Usabillity</li>
        </ul>
      </ArticleFront>
    </Section>
    <Section>
      <ArticleAboute>
        <H2>Om mig</H2>

        Jag är en kreativ och lösningsorienterad person med lätthet för att söka information. Älskar att skapa, måla, sy, odla och bygga saker. Just nu tycker jag Escape room är jättekul, och skapar gärna egna.<br /> <br />

        Jag arbetar bäst när jag i lugn och ro får sitta med ett problem, har tillgång till stöd vid behov och har möjligheten att testa mig fram.<br /><br />

        Jag har två barn som är 4 och 6 år gamla, sambo och en katt. Spenderar gärna min fritid i hemmet, trädgården eller på äventyr i skogen med barnen. <br /><br />

        En viktigt punkt för mig vid LIA, är att det finns möjlighet att arbeta hemifrån.
      </ArticleAboute>
    </Section>
  </>
  )

}
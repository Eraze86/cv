


import { Section, ArticleFront, ArticleLia, ArticleAboute, SectionMe } from "./styled/section"
import { H2, H3Lia } from "./styled/text"
export function Home() {

  return (<>


    <SectionMe>
      <ArticleFront>
        <H2>Frontend Utvecklare</H2>

        Har det senaste året lärt mig grunderna inom
        Frontend utveckling, där jag har möjligheten att
        kombinera min passion för att skapa,
        tillsammans med nyfikenhet och viljan att lära
        mig något nytt.<br /><br />
        Jag dras mer mot design och skapande av sidor,
        där jag kan vara med från början till slut, eller
        nära samarbete med kunden/ ux . Arbetar gärna
        med React och fördjupar mig i detta. Vill skapa
        sidor som är tillgängliga för alla, lättnavigerade
        och visuellt tilltalande.<br /><br />

        Utöver css grunderna har jag bra koll på react styled component och har testat tailwind.
      </ArticleFront>

      <ArticleAboute>
        <H2>Om mig</H2>

        Jag är en kreativ och lösningsorienterad person med lätthet för att söka information.
        Älskar att skapa, måla, sy och odla. Jag uppskattar utmaning och underhålling i form av
        Escape room och har även börjat skapa egna Escape room-sällskapsspel.<br /> <br />

        Jag arbetar bäst när jag i lugn och ro får sitta med ett problem, har tillgång till
        stöd vid behov och har möjligheten att testa mig fram.<br /><br />

        Jag har två barn som är 4 och 6 år gamla och sambo. Spenderar gärna min
        fritid i hemmet, trädgården eller på äventyr i skogen med barnen. <br /><br />

        En viktig punkt för mig vid LIA är att det finns möjlighet för arbete hemmifrån vid behov.
      </ArticleAboute>
    </SectionMe>
  </>
  )

}
import image from "../assets/profilbild2.jpg";

export function Home() {


  return (<>
    <section className="flex flex-col md:flex-row h-full items-center justify-center ">
      <article className="md:w-4/6 pt-12  lg:px-12 xl:px-36 ">
        <h2 className="text-white">Vem är jag?</h2>
<div className="">
<span>Är en kreativ och lösningsorienterad person med lätthet för att söka information. 
Arbetar bäst när jag i lugn och ro får sitta med ett problem, har tillgång till 
stöd vid behov och har möjligheten att testa mig fram. 

Det senaste året har jag lärt mig grunderna inom Frontendutveckling. 
Att få möjligheten att kombinera min passion för att skapa, tillsammans 
med nyfikenhet och viljan att lära mig något nytt är drivande för mig.<br/><br/>

Jag dras mer mot design och skapande, där man är delaktig från 
början till slut, nära samarbete med kund eller Ux.

Arbetar gärna med React, CSS, Html och fördjupar mig i detta. Vill skapa 
sidor som är tillgängliga för alla, lättnavigerade och visuellt tilltalande.<br/><br/>
</span></div>
      </article>
      <article className="md:w-2/6 pb-12 md:pb-0 px-0 h-full  ">
        <img src={image} className="max-h-[200px] md:max-h-[500px]   " />
      </article>
      
    </section>
  </>
  )

}
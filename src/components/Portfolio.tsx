import { ImgPort, ImgSingel } from "./styled/img"
import { SectionPort } from "./styled/section"
import { Div, SingelPage, Text } from "./styled/div"
import json from "./projekt.json"
import { useState } from "react"
import { XButton } from "./styled/button"

export function Portfolio() {
    const [project, setProject] = useState(json);
    const [showDiv, setShowDiv] = useState(false)
    const [singel, setSingel] = useState<any>([]);

    function show(e: any) {
        setShowDiv(true)
        project.forEach(function (box) {
     
                if(box.id == e.target.value){
                    let sum = {
                        id: box.id,
                        name: box.Name,
                        link: box.link, 
                        description: box.description, 
                        images: box.image
                      };
                      setSingel(sum)
                      
                }else{
              
                }
            })
    }

    let get = project.map((item, i: number) => {
        return (
            <Div className="container" key={i}>
                <button value={item.id} onClick={show}>{item.Name}</button>
                {item.description}
         
                <ImgPort src={item.image[0]} />
            </Div>
        )
    })

    return (<>
        <SectionPort id="portfolio">
                {get}
                {showDiv && <>
                    <SingelPage>
                        <XButton onClick={() => setShowDiv(false)}>X</XButton>
                        <Text><h3>{singel.name}</h3>
                        <a href={singel.link}>{singel.link}</a><br/>
                       
                        {singel.images.map((im:any, i:number )=> <ImgPort key={i} src={im} alt="ssa" />)}
                        
                        </Text>
                    </SingelPage></>}
        </SectionPort>

    </>)
}

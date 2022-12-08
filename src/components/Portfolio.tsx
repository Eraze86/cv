import { ImgPic, ImgPort} from "./styled/img"
import { SectionPort } from "./styled/section"
import { Div, ImgDiv, SingelPage, Text } from "./styled/div"
import json from "./projekt.json"
import { useState } from "react"
import { ButtonProject, XButton } from "./styled/button"

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

    let allProjects = project.map((item, i: number) => {
        return (
            <Div className="container" key={i}>
                <ButtonProject value={item.id} onClick={show}>{item.Name}</ButtonProject>
                {item.description}
         
                <ImgPort src={item.image[0]} />
            </Div>
        )
    })

    return (<>
        <SectionPort id="portfolio">
                {allProjects}
                {showDiv && <>
                    <SingelPage>
                        <XButton onClick={() => setShowDiv(false)}>X</XButton>
                        
                        <Text><h3>{singel.name}</h3><p>Workin on a slide here</p>
                        <a href={singel.link}>{singel.link}</a><br/>
                       
                        <ImgDiv>{singel.images.map((im:any, i:number )=> <ImgPic key={i} src={im} alt="ssa" />)}</ImgDiv>
                      
                        </Text>
                    </SingelPage></>}
        </SectionPort>

    </>)
}

import { ImgPic, ImgPort} from "./styled/img"
import { SectionPort } from "./styled/section"
import { Div, ImgDiv, SingelPage, Text } from "./styled/div"
import json from "./projekt.json"
import { useState } from "react"
import { ButtonProject, XButton } from "./styled/button"
import { gsap } from "gsap";
export function Portfolio() {
    const [project, setProject] = useState(json);
    const [showDiv, setShowDiv] = useState(false)
    const [showProjects, setShowProjects] = useState(true)
    const [singel, setSingel] = useState<any>([]);

    function xClicked(){
        setShowDiv(false)
        setShowProjects(true)
    }
    function show(e: any) {
        setShowDiv(true)
        setShowProjects(false)
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
            <Div key={i}>
                <div className="container">
                <h4>{item.Name}</h4>
                {item.description}
                </div>
                <ButtonProject value={item.id} onClick={show}>Pil här</ButtonProject>
                
            </Div>
        )
    })

    return (<>
        <SectionPort id="portfolio">
        {showProjects && <><div>{allProjects}</div> </>}               
                {showDiv && <>
                    <SingelPage>
                        <XButton onClick={xClicked}>X</XButton>
                        
                        <Text><h3>{singel.name}</h3>
                        <a href={singel.link}>{singel.link}</a><br/>
                       
                        <ImgDiv>{singel.images.map((im:any, i:number )=> <ImgPic key={i} src={im} alt="ssa" />)}</ImgDiv>
                      
                        </Text>
                    </SingelPage></>}
        </SectionPort>

    </>)
}

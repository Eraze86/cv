import json from "./projekt.json"
import { useState } from "react"


export function Portfolio() {
  const [flippedIndex, setFlippedIndex] = useState(-1);
  const [projects] = useState(json);
  const [flip, setFlip] = useState(false)

  function showInfo(index: number) {
    if (flippedIndex === index) {
      setFlippedIndex(-1);
      setFlip(true)
    } else {

      setFlippedIndex(index);
      setFlip(false)
    }
  }

  let allProjects = projects.map((item, i: number) => {
    const isFlipped = i === flippedIndex;

    return (
<div key={i} className={`card ${isFlipped ? "flip" : ""}`} onClick={() => showInfo(i)}>
  
    <img className="front" src={item.image}></img>
  
  
  <div className="back text-black">
    <h4 >{item.name}</h4>
    <p>{item.description}</p>
    <a href={item.gitlink}>Github</a>
    <div className="flex w-full justify-center">
    <a className="px-4" href={item.pagelink}>{item.linkname}</a>
    <a className="" href={item.extraLink}>{item.linkname2}</a></div>
  </div>
</div>
    );
  });

  return (
    <>
      <section className="card-grid">{allProjects}</section>
    </>
  );
}
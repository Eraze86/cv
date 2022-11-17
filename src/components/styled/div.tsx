import styled from "styled-components";

export const Div = styled.div`
display: flex;
flex-direction: column;
margin: 1rem;
border: solid 2px #6D9886;
padding: 1rem;
border-radius: 1rem;
align-items: center;
@media (min-width: 768px) {
 
}`

export const DivMenu = styled.div`
position: absolute;
top: -2rem;
display: flex;
flex-direction: column;
padding: 0.5rem;
width: 100vw;;
background-color: #6D9886;
align-items: flex-start;
@media (min-width: 768px) {
   display: none;
}`

export const Construct = styled.div`
position: absolute;
top: 6rem;
text-align: center;
width: 100vw;
font-size: 2rem;
@media (min-width: 768px) {
    top: 10rem;
}`
import styled, { keyframes } from "styled-components";



export const Div = styled.div`
display: flex;
flex-direction: row;
margin: 1rem;
border: solid 2px #6D9886;

justify-content: space-between;
@media (min-width: 768px) {

    
}`

export const DivMenu = styled.div`
position: absolute;
z-index: 10;
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

export const SingelPage = styled.div`
display: flex;
margin: 1rem;
padding-bottom: 2rem;

border: solid 2px #6D9886;
z-index: 0;
width: 100%;
@media (min-width: 768px) {

 
}`
export const Text = styled.div`

text-align: center;
@media (min-width: 768px) {
 
}`

export const ImgDiv = styled.div`

display: flex;
flex-direction: column;
align-items: center;

@media (min-width: 768px) {

}`


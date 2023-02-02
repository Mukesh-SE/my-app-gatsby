import * as React from 'react';
import styled from 'styled-components';
import Wave from './waves';

//import CSS FIles 
import './styles/Sections.css'


const SectionGroup = styled.div`
   background:linear-gradient(90deg, rgba(0,0,0,0.6)0%, rgba(0,0,0,0.6)100%), #c0526a;
   background-repeat: no-repeat;
   background-size: cover;
   height: 720px;

   display: grid;
   grid-template-rows: 300px auto;
   grid-gap: 20px
   position: relative;
   
`
const SectionLogo = styled.img`
   width: 200px;
   align-self: end;
   margin: 0 auto;
   filter: invert(100%);
`

const SectionTitleGroup = styled.div`
   color: white;
   display: grid;
   grid-template-columns: 300px auto;
   grid-gap:30px;
   margin: 0 40px;
`

const SectionTitle = styled.h3`
   font-size: 40px;
   margin 0;
   line-height: 1.2;
`

const SectionText = styled.p``;

const WaveBottom = styled.div`
   width: 100%;
   position: absolute;
   bottom: -279%;
`;

const WaveTop = styled.div`
   position: absolute;
   top: 248%;
   width: 100%;

   transform: rotate(180deg)

`
const Section=props=>{
   return(
         <SectionGroup image={props.image}>
            <WaveTop><Wave/></WaveTop>
            <WaveBottom><Wave/></WaveBottom>
            <SectionLogo src={props.logo}/>

            <SectionTitleGroup>
               <SectionTitle>
                  {props.title}
               </SectionTitle>

               <SectionText>
                  {props.text}
               </SectionText>
            </SectionTitleGroup>

         </SectionGroup>
   )
}

export default Section;
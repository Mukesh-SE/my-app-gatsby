import * as React from "react";
import styled from "styled-components";

const CellGroup = styled.div`
   max-width: 300px;
   display: grid;
   grid-template-columns: 80px auto;
   grid-gap: 20px;
   align-items: center;
`

const CellImage = styled.div`
   width: 80px;
   height: 80px;
   border-radius: 10px;
   background: url(${props => props.image}) no-repeat;
   background-size: 80px;
   background-position: center center;


`
const CellBrand = styled.div`
   font-size: 24px;
   border-bottom: 1px solid rgba(0,0,0,0.7);
   padding: 30px 0;


`
// const CellName = styled.h2``
// const CellDes = styled.p``

const Cell = props=>{
   return(
      <CellGroup>
         <CellImage image={props.image}/>
         <CellBrand>{props.brand}</CellBrand>
      </CellGroup>
   )
}

export default Cell;
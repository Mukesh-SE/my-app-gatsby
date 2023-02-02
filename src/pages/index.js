import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import styled from "styled-components"

import Layout from "../components/layout"
import Seo from "../components/seo"

// JSON FIles
import staticdata from "../../staticdata.json"

// Importing JS FILES
import Header from "../components/header"
import Card from "../components/cards"
import Section from "../components/sections"
import Wave from "../components/waves"
import Cell from "../components/cells"

// CSS FIles
import * as styles from "../components/index.module.css"
import "../components/styles/Index.css"

// Logos image
import CardMen from "../images/prod/card1.png"
import SectionImage from "../images/prod/bg.png"

import logo from '../images/prod/logo.png'
import logoOne from "../images/logs/logoOne.png";
import logoTwo from "../images/logs/logo2.png";
import logoThree from "../images/logs/logo3.png";
import logoFour from "../images/prod/6.png";


// const utmParameters = `?utm_source=starter&utm_medium=start-page&utm_campaign=default-starter`


const SectionCaption = styled.p`
  font-weight: 600;
  font-size: 20px;
  text-transform: uppercase;
  color: #94A4BA;
  text-align: center;
`
const SectionCellGroup = styled.div`
  max-width: 800px;
  display: grid;
  grid-template-columns: repeat(2, auto);
  margin: 0 auto 100px;
  grid-coulmn-gap: 30px;
  align-items: center;
`

const IndexPage = () => (
  <>
    <Header></Header>
    
    <Layout>
      <div className="Hero">
        <div className="HeroGroup">
          <h1>
            Welcome to our <b>Shoe&nbsp;-&nbsp;Store!</b>
          </h1>
          
          <p>
            We offer a wide selection of high-quality shoes for men, women, and children. 
            From casual sneakers to formal dress shoes, we have something for every occasion.
          </p>
          
          <a href="#" className="trailer">Watch</a>
          <Link to="/page-2/" className="second-page">Go to second page</Link>

          <div className="social">
            <img src={logoOne}/>
            <img src={logoTwo}/>
            <img src={logoThree}/>
          </div>

          <Wave/>
        </div>
      </div>  
    </Layout>
    
    <h1 className="Heading">New Shoes</h1>
    <div className="pCard">
        {/* Men */}
      <Card 
        image={CardMen}
        title="Men" 
        size="36"
      />

      {/* Women */}
      <Card 
        image={CardMen}
        title="Women" 
        size="24"
      />

      {/* Child */}
      <Card 
        image={CardMen}
        title="Child" 
        size="18" 
      />

      {/* Elder */}
      <Card 
        image={CardMen}
        title="Elder" 
        size="28"
      />
      </div>
    <Section
      image={SectionImage}
      logo={logo}
      title= "Discover the Latest Trends in Footwear"
      text=
        "Stay on top of the latest fashion with our collection of trendy shoes. From sneakers to sandals, we have everything you need to complete your look. Our collection features a wide range of styles, colors, and materials to fit your personal taste. Whether you’re looking for a new pair of sneakers for your daily workout, a comfortable pair of loafers for the office, or stylish sandals for a night out, you'll find what you're looking for here. Browse our selection today and discover the perfect pair of shoes to elevate your style"
    />

      <SectionCaption>Companies</SectionCaption>
      <SectionCellGroup>
        {staticdata.cells.map(cell => (
          <Cell
            brand={cell.brand}
            name={cell.name}
            image={cell.image}
          ></Cell>
        ))}
      </SectionCellGroup>


    
  </>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />

export default IndexPage

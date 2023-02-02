import * as React from "react"
import { Link } from "gatsby"
import logo from "../images/prod/logo.png"
import './styles/Header.css'



// colors
const headerBgColor = '#C3ACD0';

class Header extends React.Component{
  constructor(props){
    super(props)

    this.state = {
      hasScrolled: false,
    }
  }

  componentDidMount(){
    window.addEventListener("scroll", this.handleScroll)
  }

  handleScroll = (event)=>{
    const scrollTop = window.pageYOffset

    if(scrollTop > 50){
      this.setState({hasScrolled: true})
    }
    else{
      this.setState({hasScrolled: false})
    }
  }

  render(){
    return(
      <div className={this.state.hasScrolled ? "Header HeaderScroll": "Header"}>
        <div className="HeaderGroup">
          <Link to="/"><img src={logo}/></Link>
          <Link to="/men">Home</Link>
          <Link to="/men">Men</Link>
          <Link to="/women">Women</Link>
          <Link to="/kids">Kids</Link>
          <Link to="/about">About Us</Link>
          <Link to="/contact">Contact Us</Link>
        </div>
      </div>
    )
  }
}

export default Header;
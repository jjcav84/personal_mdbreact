
import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { MDBNavbar, NavbarToggler, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBMask, MDBRow, MDBCol, MDBIcon,  MDBBtn, MDBView, Fa, Animation, Collapse, MDBContainer } from 'mdbreact'
import src1 from '../assets/png/JC_v3_50px.png'
import  './VideoBackgroundPage.css'
import background from '../assets/jpeg/background.jpg'
import ModalPage from './ModalPage'

class VideoBackgroundPage extends React.Component {
  state = {
    collapseID: ""
  };
  toggleCollapse = collapseID => () => this.setState(prevState => ({
      collapseID: prevState.collapseID !== collapseID ? collapseID : ""
    }
  
  ));
  render() {
    return (
      <div id="videobackground">
        <Router>
          <div>
            <MDBNavbar color="cyan accent-1" light expand="md" fixed="top" scrolling>
                <MDBNavbarBrand>
                  <Animation type="bounce" duration="1s"  delay="700ms">
                  <a href="/">
                    <img src={src1} type="image/png" height="50" alt="JC logo" />
                    </a>
                  </Animation>
                </MDBNavbarBrand>
                <NavbarToggler tag="button" className="aqua-gradient" onClick={this.toggleCollapse('navbarCollapse12')}>
      <span className="white-text">
        <Fa icon="bars" />
      </span>
    </NavbarToggler>
    <Collapse id="navbarCollapse12" isOpen={this.state.collapseID} navbar>
                  <MDBNavbarNav left>
                    <MDBNavItem>
                      <a className="btn nav-link text-dark Ripple-parent hover" href="#about"> <strong>About Me</strong></a>
                    </MDBNavItem>
                    <MDBNavItem>
                      <a className="btn nav-link text-dark Ripple-parent hover" href="#skills"> <strong>Skills</strong></a>
                    </MDBNavItem>
                    <MDBNavItem>
                    <ModalPage />
                    </MDBNavItem>
                  </MDBNavbarNav>
                  <MDBNavbarNav right>
                    <MDBNavItem>
                    <a className="nav-link text-dark navbar-link hover" rel="noopener noreferrer" target="_blank" href="https://linkedin.com/in/jacobjessecavazos"><MDBIcon fab icon="linkedin" /></a>
                    </MDBNavItem>
                    <MDBNavItem>
                    <a className="nav-link text-dark navbar-link hover" rel="noopener noreferrer" target="_blank" href="https://github.com/jjcav84"><MDBIcon fab icon="github" /></a>
                    </MDBNavItem>
                    <MDBNavItem>
                    <a className="nav-link text-dark navbar-link hover" rel="noopener noreferrer" target="_blank" href="https://twitter.com/jcavazos84"><MDBIcon fab icon="twitter" /></a>
                    </MDBNavItem>
                    <MDBNavItem>
                    <a className="nav-link text-dark navbar-link hover" rel="noopener noreferrer" target="_blank" href="https://hub.docker.com/u/jcavazos"><MDBIcon fab icon="docker" /></a>
                    </MDBNavItem>
                  </MDBNavbarNav>
                </Collapse>
            </MDBNavbar>
            {this.state.collapseID }
          </div>
        </Router>
        <MDBView src={background} className="img-fluid" waves>
    <MDBMask className="d-flex justify-content-center align-items-center gradient">
    <MDBContainer>
              <MDBRow>
                <MDBCol md="12" className="mb-5 white-text text-center">
                  <h2 className="h2-responsive font-weight-bold mt-5">
                    Jacob Cavazos{" "}
                  </h2>
                  <hr className="hr-light my-1 w-75" />
                  <h4 className="subtext-header">
                    Web Development & IT Operations Engineering
                  </h4>
                  <Animation type="rubberBand" duration="2s" delay="700ms">
                  <MDBBtn outline rounded hover="true" waves-effect="true" color="white"  size="lg" href="mailto:jake@jacobcavazos.com">
                    <MDBIcon icon="home" /> Email me
                  </MDBBtn>
                  </Animation>
                </MDBCol>
              </MDBRow>
              </MDBContainer>
          </MDBMask>
        </MDBView>
        </div>
    )
  }
}

export default VideoBackgroundPage
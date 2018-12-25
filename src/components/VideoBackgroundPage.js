import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { MDBNavbar, NavbarToggler, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBMask, MDBRow, MDBCol, MDBIcon,  MDBBtn, MDBView, MDBContainer, Fa, Animation, Collapse } from "mdbreact";
import src1 from "../assets/png/JC_v3_50px.png";
import  "./VideoBackgroundPage.css";
import background from "../assets/jpeg/background.jpg";

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
              <MDBContainer>
                <MDBNavbarBrand>
                  <Animation type="bounce" duration="1s">
                    <img src={src1} type="image/png" height="50" alt="JC logo" />
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
                      <a className="nav-link text-dark Ripple-parent hover" href="/"> <strong>Home</strong></a>
                    </MDBNavItem>
                    <MDBNavItem>
                      <a className="nav-link text-dark Ripple-parent hover" href="#about"> <strong>About Me</strong></a>
                    </MDBNavItem>
                    <MDBNavItem>
                      <a className="nav-link text-dark Ripple-parent hover" href="#skills"> <strong>Skills</strong></a>
                    </MDBNavItem>
                    <MDBNavItem>
                      <a className="nav-link text-dark Ripple-parent hover" href="#map"> <strong>Map</strong></a>
                    </MDBNavItem>
                    <MDBNavItem>
                      <a className="nav-link text-dark Ripple-parent hover" href="#testimonial"> <strong>Testimonial</strong></a>
                    </MDBNavItem>
                    <MDBNavItem>
                      <a className="nav-link text-dark Ripple-parent hover" href="#twitter"> <strong>Twitter Feed</strong></a>
                    </MDBNavItem>
                    <MDBNavItem>
                    <a className="nav-link text-dark Ripple-parent hover" href="#blog"> <strong>Blog</strong></a> 
                    </MDBNavItem>
                  </MDBNavbarNav>
                  <MDBNavbarNav right>
                    <MDBNavItem>
                    <a className="nav-link text-dark navbar-link hover" rel="noopener noreferrer" target="_blank" href="https://linkedin.com/in/jacobjessecavazos"><Fa icon="linkedin" /></a>
                    </MDBNavItem>
                    <MDBNavItem>
                    <a className="nav-link text-dark navbar-link hover" rel="noopener noreferrer" target="_blank" href="https://github.com/jjcav84"><Fa icon="github" /></a>
                    </MDBNavItem>
                    <MDBNavItem>
                    <a className="nav-link text-dark navbar-link hover" rel="noopener noreferrer" target="_blank" href="https://twitter.com/jcavazos84"><Fa icon="twitter" /></a>
                    </MDBNavItem>
                  </MDBNavbarNav>
                </Collapse>
              </MDBContainer>
            </MDBNavbar>
            {this.state.collapseID }
          </div>
        </Router>
        <MDBView>
          <video className="video-intro" poster={background} playsInline
            autoPlay muted="" loop>
          </video>
    <MDBMask className="d-flex justify-content-center align-items-center gradient">
            <MDBContainer className="px-md-3 px-sm-0">
              <MDBRow>
                <MDBCol md="12" className="mb-4 white-text text-center">
                  <h3 className="display-4 font-weight-bold mb-0 pt-md-5">
                    Jacob Cavazos{" "}
                  </h3>
                  <hr className="hr-light my-4 w-75" />
                  <h4 className="subtext-header mt-2 mb-4">
                    Web Development IT Operations Engineer Focused on Cloud Native Technology
                  </h4>
                  <Animation type="rubberBand" duration="2s" delay="500ms">
                  <MDBBtn outline rounded hover="true" waves-effect="true" color="white" size="lg" href="mailto:jake@jacobcavazos.com">
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
};

export default VideoBackgroundPage;
import React from 'react';
import { Col, Container, Row, Footer } from "mdbreact";

class FooterPage extends React.Component {
  render() {
    return (       
       <Footer color="purple darken-1" className="page-footer font-small pt-0">
        <div style={{ backgroundColor: "cyan" }}>
          <Container fluid className="text-center text-md-left">
            <Row className="py-4 d-flex align-items-center">
              <Col md="6" lg="5" className="text-center text-md-left mb-4 mb-md-0">
                <h6 className="mb-0 black-text">
                  Get connected with me on social media!
                </h6>
              </Col>
              <Col md="6" lg="7" className="text-center text-md-right">
                <a href="https://github.com/jjcav84">
                  <i className="fa fa-github black-text mr-4"> </i>
                </a>
                <a className="tw-ic" href="https://twitter.com/jcavazos84">
                  <i className="fa fa-twitter black-text mr-4"> </i>
                </a>
                <a className="li-ic" href="https://linkedin.com/in/jacobjessecavazos">
                  <i className="fa fa-linkedin black-text mr-4"> </i>
                </a>
              </Col>
            </Row>
          </Container>
        </div>
        <Container className="mt-5 mb-4 text-center text-md-left">
          <Row className="mt-3">
            <Col  md="4" className="mb-4">
              <h6 className="text-uppercase font-weight-bold">
                <strong>jacobcavazos.com</strong>
              </h6>
              <hr
                className="teal accent-1 mb-4 mt-0 d-inline-block mx-auto"
                style={{ width: "165px" }} />
              <p>
                Thank you for visiting my site. Please feel free to contact me about anything that I may be able to assist you with. I hope to speak with you very soon about your projects.
              </p>
            </Col>
            <Col md="2"  className="mb-4">
              <h6 className="text-uppercase font-weight-bold">
                <strong>My Links</strong>
              </h6>
              <hr
                className="teal accent-1 mb-4 mt-0 d-inline-block mx-auto"
                style={{ width: "85px" }} />
              <p>
                <a href="https://jakecavazos.pro">jQuery Admin Panel</a>
              </p>
              <p>
                <a href="https://jakecavazos.website">React Admin Panel</a>
              </p>
              <p>
                <a href="https://linkedin.com/in/jacobjessecavazos">LinkedIn</a>
              </p>
              <p>
                <a href="https://github.com/jjcav84">Github</a>
              </p>
              <p>
                <a href="https://twitter.com/jcavazos84">Twitter</a>
              </p>
            </Col>
            <Col md="3" className="mb-4">
              <h6 className="text-uppercase font-weight-bold">
                <strong>Useful links</strong>
              </h6>
              <hr
                className="teal accent-1 mb-4 mt-0 d-inline-block mx-auto"
                style={{ width: "108px" }} />
              <p>
                <a href="https://material.io">Material Design</a>
              </p>
              <p>
                <a href="https://centminmod.com">CentminMod Bash Script</a>
              </p>
              <p>
                <a href="https://app.vagrantup.com/jcavazos">Vagrant Cloud</a>
              </p>
              <p>
                <a href="https://mdbootstrap.com/material-design-for-bootstrap/?utm_ref_id=38136">Material Design for Bootstrap</a>
              </p>
            </Col>
            <Col md="3" className="mb-4">
              <h6 className="text-uppercase font-weight-bold">
                <strong>Contact</strong>
              </h6>
              <hr
                className="teal accent-1 mb-4 mt-0 d-inline-block mx-auto"
                style={{ width: "73px" }} />
              <p>
                <i className="fa fa-envelope mr-3" /> 
                <a href="mailto:jake@jacobcavazos.com">jake@jacobcavazos.com</a>
              </p>
              <p>
                <i className="fa fa-phone mr-3" /> +1 (210) 724-5909
              </p>
            </Col>
          </Row>
        </Container>
        <div className="footer-copyright text-center py-3">
          <Container fluid>
            <p>
              &copy; {new Date().getFullYear()} Copyright:{" "}
              Jacob Cavazos
            </p>
          </Container>
        </div>
      </Footer>
          );
        }
      }
      
      export default FooterPage;
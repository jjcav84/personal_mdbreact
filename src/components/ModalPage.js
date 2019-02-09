import React, { Component } from "react"
import {
  MDBContainer,
  MDBBtn,
  MDBModal,
  MDBModalBody,
  MDBModalHeader,
  MDBModalFooter,
  MDBRow
} from "mdbreact"
import TwitterTimeline from "./TwitterTimeline"
import AccordionPage from "./AccordionPage"
import ContactPage from "./ContactPage"
import TestimonialsPage from "./TestimonialsPage"

class ModalPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      modal2: false,
      modal3: false,
      modal4: false,
      modal5: false
    }
  }

  toggle(nr) {
    let modalNumber = "modal" + nr
    this.setState({
      [modalNumber]: !this.state[modalNumber]
    })
  }

  render() {
    return (
      <MDBContainer>
        <MDBRow center>
          <p
            className="btn nav-link text-dark Ripple-parent hover"
            onClick={() => this.toggle(2)}
          >
            <strong>Twitter Feed</strong>
          </p>
          <MDBModal
            isOpen={this.state.modal2}
            toggle={() => this.toggle(2)}
            size="lg"
          >
            <MDBModalHeader toggle={() => this.toggle(2)}>
              My Twitter Feed
            </MDBModalHeader>
            <MDBModalBody>
              <TwitterTimeline />
            </MDBModalBody>
            <MDBModalFooter>
              <MDBBtn color="purple" size="lg" onClick={() => this.toggle(2)}>
                Close
              </MDBBtn>
            </MDBModalFooter>
          </MDBModal>
          <p
            className="btn nav-link text-dark Ripple-parent hover"
            size="lg"
            onClick={() => this.toggle(3)}
          >
            <strong>Blog Articles</strong>
          </p>
          <MDBModal
            isOpen={this.state.modal3}
            toggle={() => this.toggle(3)}
            size="lg"
          >
            <MDBModalHeader toggle={() => this.toggle(3)}>
              Blog Articles
            </MDBModalHeader>
            <MDBModalBody>
              <AccordionPage />
            </MDBModalBody>
            <MDBModalFooter>
              <MDBBtn color="purple" size="lg" onClick={() => this.toggle(3)}>
                Close
              </MDBBtn>
            </MDBModalFooter>
          </MDBModal>
          <p
            className="btn nav-link text-dark Ripple-parent hover"
            size="lg"
            onClick={() => this.toggle(4)}
          >
            <strong>Contact</strong>
          </p>
          <MDBModal
            isOpen={this.state.modal4}
            toggle={() => this.toggle(4)}
            size="fluid"
            backdrop={false}
          >
            <MDBModalHeader toggle={() => this.toggle(4)}>Contact me</MDBModalHeader>
            <MDBModalBody>
              <ContactPage />
            </MDBModalBody>
            <MDBModalFooter>
              <MDBBtn color="purple" onClick={() => this.toggle(4)}>
                Close
              </MDBBtn>
            </MDBModalFooter>
          </MDBModal>
          <p
            className="btn nav-link text-dark Ripple-parent hover"
            size="lg"
            onClick={() => this.toggle(5)}
          >
            <strong>Testimonials</strong>
          </p>
          <MDBModal
            isOpen={this.state.modal5}
            toggle={() => this.toggle(5)}
            size="lg"
          >
            <MDBModalHeader toggle={() => this.toggle(5)}>
              Testimonials
            </MDBModalHeader>
            <MDBModalBody>
              <TestimonialsPage />
            </MDBModalBody>
            <MDBModalFooter>
              <MDBBtn color="purple" onClick={() => this.toggle(5)}>
                Close
              </MDBBtn>
            </MDBModalFooter>
          </MDBModal>
        </MDBRow>
      </MDBContainer>
    )
  }
}

export default ModalPage

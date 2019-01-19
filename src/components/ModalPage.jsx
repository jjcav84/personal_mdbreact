import React from 'react';
import { Container, Button, Modal, ModalBody, ModalHeader, ModalFooter, MDBRow } from 'mdbreact';
import TwitterTimeline from './TwitterTimeline.jsx';
import AccordionPage from './AccordionPage.jsx';
import ContactPage from './ContactPage.jsx';
import TestimonialsPage from './TestimonialsPage.jsx';


class ModalPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal2: false,
      modal3: false,
      modal4: false,
      modal5: false
    };
  }

  toggle(nr) {
    let modalNumber = 'modal' + nr
    this.setState({
      [modalNumber]: !this.state[modalNumber]
    });
  }

  render() {
    return (
      <Container>
        <MDBRow center>
          <p className="btn nav-link text-dark Ripple-parent hover" onClick={() => this.toggle(2)}><strong>Twitter Feed</strong></p>
          <Modal isOpen={this.state.modal2} toggle={() => this.toggle(2)} size="md">
            <ModalHeader toggle={() => this.toggle(2)}>My Twitter Feed</ModalHeader>
            <ModalBody>
              <TwitterTimeline />
            </ModalBody>
            <ModalFooter>
              <Button color="purple" size="lg" onClick={() => this.toggle(2)}>Close</Button>
            </ModalFooter>
          </Modal>
          <p className="btn nav-link text-dark Ripple-parent hover" size="lg" onClick={() => this.toggle(3)} ><strong>Blog Articles</strong></p>
          <Modal isOpen={this.state.modal3} toggle={() => this.toggle(3)} size="lg">
            <ModalHeader toggle={() => this.toggle(3)}>Blog Articles</ModalHeader>
            <ModalBody>
              <AccordionPage />
            </ModalBody>
            <ModalFooter>
              <Button color="purple" size="lg" onClick={() => this.toggle(3)}>Close</Button>
            </ModalFooter>
          </Modal>
          <p className="btn nav-link text-dark Ripple-parent hover" size="lg" onClick={() => this.toggle(4)} ><strong>Contact</strong></p>
          <Modal isOpen={this.state.modal4} toggle={() => this.toggle(4)} size="fluid" backdrop={false}>
            <ModalHeader toggle={() => this.toggle(4)}>Contact me</ModalHeader>
            <ModalBody>
              <ContactPage />
            </ModalBody>
            <ModalFooter>
              <Button color="purple" onClick={() => this.toggle(4)}>Close</Button>
            </ModalFooter>
          </Modal>
          <p className="btn nav-link text-dark Ripple-parent hover" size="lg" onClick={() => this.toggle(4)} ><strong>Testimonial</strong></p>
          <Modal isOpen={this.state.modal4} toggle={() => this.toggle(5)} size="fluid" backdrop={false}>
            <ModalHeader toggle={() => this.toggle(4)}>Testimonials</ModalHeader>
            <ModalBody>
              <TestimonialsPage />
            </ModalBody>
            <ModalFooter>
              <Button color="purple" onClick={() => this.toggle(5)}>Close</Button>
            </ModalFooter>
          </Modal>
        </MDBRow>
      </Container>
    );
  }
}

export default ModalPage;
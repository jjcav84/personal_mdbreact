import React from 'react';
import { Container, Button, Modal, ModalBody, ModalHeader, ModalFooter, MDBRow } from 'mdbreact';
import TwitterTimeline from './TwitterTimeline.jsx';
import AccordionPage from './AccordionPage.jsx';


class ModalPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal2: false,
      modal3: false
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
        <Modal isOpen={this.state.modal2} toggle={() => this.toggle(2)} size="lg">
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
        </MDBRow>
      </Container>
    );
  }
}

export default ModalPage;
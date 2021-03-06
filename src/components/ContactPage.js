import React from 'react'
import {
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBIcon,
  MDBBtn,
  MDBInput,
  MDBContainer
} from 'mdbreact'

const ContactPage = () => {
  return (
    <section id="contact" className="my-5">
      <MDBContainer>
        <p className="text-center w-responsive mx-auto pb-5">
          I would love if you would contact me with any questions comments or
          even complaints that you may have. I read every email and will
          personally respond to all contact submissions.
        </p>
      </MDBContainer>
      <MDBContainer className="mx-auto">
        <MDBRow>
          <MDBCol lg="5" className="lg-0 mb-4">
            <MDBCard>
              <MDBCardBody>
                <div className="form-header cyan">
                  <h3 className="mt-2">
                    <MDBIcon icon="envelope" />
                    Write to me:
                  </h3>
                </div>
                <form
                  action="https://formspree.io/jake@jacobcavazos.com"
                  method="POST">
                  <div className="md-form">
                    <MDBInput
                      name="name"
                      label="Your name"
                      type="text"
                      id="form-name"
                    />
                  </div>
                  <div className="md-form">
                    <MDBInput
                      name="email"
                      label="Your email"
                      type="text"
                      id="form-email"
                    />
                  </div>
                  <div className="md-form">
                    <MDBInput
                      name="subject"
                      label="Subject"
                      type="text"
                      id="form-subject"
                    />
                  </div>
                  <div className="md-form">
                    <MDBInput
                      name="areatext"
                      icon="pencil"
                      label="message"
                      iconClass="grey-text"
                      type="textarea"
                      id="form-text"
                    />
                    <MDBInput
                      type="hidden"
                      name="_next"
                      value="https://jacobcavazos.com/"
                    />
                    <MDBInput type="text" name="_gotcha" className="d-none" />
                  </div>
                  <div className="text-center">
                    <MDBBtn type="submit" color="cyan">
                      Submit
                    </MDBBtn>
                  </div>
                </form>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol lg="7">
            <div
              id="map-container"
              className="rounded z-depth-1-half map-container"
              style={{ height: '400px' }}>
              <iframe
                src="https://www.google.com/maps/embed/v1/place?key=AIzaSyChaY0p1-16o6nCrJp_byQtDcfShQzmuck&q=Alamo, San Antonio+TX"
                title="This is a unique title"
                width="100%"
                height="100%"
                frameBorder="0"
                style={{ border: 0 }}
              />
            </div>
            <br />
            <MDBRow className="text-center">
              <MDBCol md="4">
                <MDBBtn tag="a" floating color="cyan" className="accent-1">
                  <MDBIcon icon="map-marker" />
                </MDBBtn>
                <p>San Antonio, TX</p>
              </MDBCol>
              <MDBCol md="4">
                <MDBBtn tag="a" floating color="cyan" className="accent-1">
                  <MDBIcon icon="phone" />
                </MDBBtn>
                <p>+1 (210) 724 5909</p>
              </MDBCol>
              <MDBCol md="4">
                <MDBBtn tag="a" floating color="cyan" className="accent-1">
                  <MDBIcon icon="envelope" />
                </MDBBtn>
                <p className="mb-md-0">jake@jacobcavazos.com</p>
              </MDBCol>
            </MDBRow>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>
  )
}

export default ContactPage

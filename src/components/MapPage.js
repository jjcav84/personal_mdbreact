import React from "react";
import { MDBRow, MDBCol, MDBIcon, MDBBtn, Animation } from "mdbreact";

const MapPage = () => {
  return (
    <section className="my-5 mx-2 text-center">
     <Animation reveal type="zoomIn" duration="1s">
        <MDBIcon className="cyan-text" icon="map" size="3x" />
      </Animation>  
    <h2 className="h2-responsive font-weight-bold my-5">
      My Hometown
    </h2>
    <MDBRow>
      <MDBCol size="1">
      </MDBCol>
        <MDBCol size="10">
          <div
            id="map-container"
            className="rounded z-depth-1-half map-container"
            style={{ height: "400px" }}
          >
            <iframe
              src="https://www.google.com/maps/embed/v1/place?key=AIzaSyChaY0p1-16o6nCrJp_byQtDcfShQzmuck&q=Alamo, San Antonio+TX" allowFullScreen
              title="This is a unique title"
              width="100%"
              height="100%"
              frameBorder="0"
              style={{ border: 0 }}
            />
          </div>
          </MDBCol>
          <MDBCol size="1">
          </MDBCol>
          </MDBRow>
          <br />
          <MDBRow className="text-center">
            <MDBCol md="4">
              <MDBBtn tag="a" floating color="cyan" className="lighten-1">
                <MDBIcon icon="map-marker" />
              </MDBBtn>
              <p className="mt-2">San Antonio, TX</p>
              <p>United States</p>
            </MDBCol>
            <MDBCol md="4">
              <MDBBtn tag="a" floating color="cyan" className="lighten-1">
                <MDBIcon icon="phone" />
              </MDBBtn>
              <p className="mt-2">+1 (210) 724-5909</p>
              <p>Mon - Fri, 10:00-18:00</p>
            </MDBCol>
            <MDBCol md="4">
              <MDBBtn tag="a" floating color="cyan" className="lighten-1">
                <MDBIcon icon="envelope" />
              </MDBBtn>
              <p className="mt-2">jake@jacobcavazos.com</p>
            </MDBCol>
          </MDBRow>
    </section>
);
}

export default MapPage;
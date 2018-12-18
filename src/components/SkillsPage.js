import React from "react";
import {  MDBRow, MDBCol, MDBCard, Animation, MDBIcon  } from "mdbreact";
import card1 from '../assets/jpeg/32.jpg';
import card2 from '../assets/jpeg/73.jpg';

const SkillsPage = () => {
  return (
    <section id="skills" className="text-center mx-4 my-5">
      <h2 className="h2-responsive font-weight-bold my-3">
        My Skills
      </h2>
      <Animation reveal type="zoomIn" duration="1s">
        <MDBIcon className="cyan-text mb-5" icon="terminal" size="3x" />
      </Animation>
    <MDBRow>
    <MDBCol size="1">
    </MDBCol>
      <MDBCol className="mb-4">
        <Animation reveal type="slideInLeft">
        <MDBCard className="card-image"
          style={{ backgroundImage: "url(" + card1 +")" }}>
          <div className="text-white text-center d-flex align-items-center rgba-black-strong py-5 px-4 rounded">
            <div>
              <h3 className="py-3 font-weight-bold">
                <strong>Web Development and IT Operations Engineering</strong>
              </h3>
              <p className="pb-3">
                I use HTML5, CSS3, JavaScript, and many popular frameworks including Bootstrap 4, React, and Ruby on Rails. I also have a firm background in WordPress theme and plugin development. I prefer to use LEMP stacks featuring PHP 7.2.x and MariaDB, with Nginx web server on CentOS, but I am familiar with Apache web server as well. Although I prefer RHEL and CentOS I know how to use Debian, Ubuntu, Alpine, and FreeBSD. I employ Ruby on Rails and Node.js for back end solutions utilizing Redis and Nginx for caching, reverse proxy, and load balancing. I efficiently and cost effectively develop, deploy, scale, and maintain web applications. I am enthusiastic about converting monolitic and tiered web application architecture to microservice architecture through the user of containers and by leveraging Kubernetes on AWS, Google Cloud, and various unmanaged cloud hosting providers including DigitalOcean, Upcloud, and Linode allowing for high availability and horizontal auto scaling.
              </p>
            </div>
          </div>
        </MDBCard>
        </Animation>
      </MDBCol>
      <MDBCol size="1">
      </MDBCol>
      </MDBRow>
      <MDBRow>
      <MDBCol size="1">
      </MDBCol>
      <MDBCol className="mb-4">
      <Animation reveal type="slideInRight">
        <MDBCard className="card-image" style={{ backgroundImage: "url(" + card2 +")" }}>
          <div className="text-white text-center d-flex align-items-center rgba-black-strong py-5 px-4 rounded">
            <div>
              <div>
              <h3 className="py-3 font-weight-bold">
                <strong>Responsive Mobile First Front End Development</strong>
              </h3>
                <p className="pb-3">
                  I build responsive mobile first web applications and using the latest trends in language and frameworks including HTML5, CSS3, Bootstrap 4, ReactJS, Webpack, AJAX, and jQuery as well as WordPress theme and plugin development with an expertise in Material Design implementation for effective and modern reactive user interfaces.
                </p>
              </div>
            </div>
          </div>
        </MDBCard>
        </Animation>
      </MDBCol>
      <MDBCol size="1">
      </MDBCol>
    </MDBRow>
  </section>
    );
  }
  
  export default SkillsPage;
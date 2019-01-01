import React from 'react';
import { MDBContainer, MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBTestimonial, MDBIcon } from 'mdbreact';

const TestimonialsPage = () => {
  return (
    <MDBContainer>
      <section id="testimonial" className="text-center my-4">
        <h3 className="h3-responsive font-weight-bold my-4 pb-2">
        Testimonials
        </h3>

        <MDBCarousel
          activeItem={1}
          length={1}
          testimonial={true}
          interval={false}
          showIndicators={true}
          className="no-flex"
        >
          <MDBCarouselInner>
            <MDBCarouselItem itemId="1">
              <MDBTestimonial>
                <p>
                  <MDBIcon icon="quote-left" /> I have known Jacob Cavazos for about eight years. In that time he impressed me with his technical skills and knowledge. His willingness to embrace new technologies and his stark enthusiasm for technology are almost unbelievable as they are unwavering. Jacob played a lead role in the success of our projects and the subsequent support of solutions. It was through Jacob´s skills and knowledge as well as his ability to lead technical discussions, to assist and direct others with his energy and drive to deliver against difficult goals at the center of Alzheimer's and Parkinson's disease research by leveraging his technical sophistication to accelerate our tempo as a behind the scenes facilitator. Jacob was the key technical resource in my group. Jacob taught and mentored M.S. and Ph.D. students and helped also a postdoctoral scientist in his technological tasks. Jacob was one of the finest people I have worked with. He is a very hard working, focused and motivated individual with expertise in many various areas of technology especially Linux operations.
                  <MDBIcon icon="quote-right" />
                </p>
                <h4 className="font-weight-bold my-1 pt-2">Professor Dr. Orkid Coskuner Weber</h4>
                <h6 className="font-weight-bold my-3">
                Turkish-German University Molecular Biotechnology
                </h6>
                <MDBIcon icon="star" className="light-blue-text" />
                <MDBIcon icon="star" className="light-blue-text" />
                <MDBIcon icon="star" className="light-blue-text" />
                <MDBIcon icon="star" className="light-blue-text" />
                <MDBIcon icon="star-half-full" className="light-blue-text" />
              </MDBTestimonial> 
            </MDBCarouselItem>
          </MDBCarouselInner>
        </MDBCarousel>
      </section>
    </MDBContainer>
  );
};

export default TestimonialsPage;

import React from 'react'
import {
  MDBContainer,
  MDBCarousel,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBTestimonial,
  MDBIcon
} from 'mdbreact'

const TestimonialsPage = () => {
  return (
    <MDBContainer>
      <section id="testimonial" className="text-center my-4">
        <MDBCarousel
          activeItem={1}
          length={2}
          testimonial
          interval={7000}
          showIndicators={false}
          className="no-flex">
          <MDBCarouselInner>
            <MDBCarouselItem itemId="1">
              <MDBTestimonial>
                <h5>
                  <MDBIcon icon="quote-left" /> I have known Jacob Cavazos for
                  about eight years. In that time he impressed me with his
                  technical skills and knowledge. His willingness to embrace new
                  technologies and his stark enthusiasm for technology are
                  almost unbelievable as they are unwavering. Jacob played a
                  lead role in the success of our projects and the subsequent
                  support of solutions. It was through Jacob´s skills and
                  knowledge as well as his ability to lead technical
                  discussions, to assist and direct others with his energy and
                  drive to deliver against difficult goals at the center of
                  Alzheimer&apos;s and Parkinson&apos;s disease research by
                  leveraging his technical sophistication to accelerate our
                  tempo as a behind the scenes facilitator. Jacob was the key
                  technical resource in my group. Jacob taught and mentored M.S.
                  and Ph.D. students and helped also a postdoctoral scientist in
                  his technological tasks. Jacob was one of the finest people I
                  have worked with. He is a very hard working, focused and
                  motivated individual with expertise in many various areas of
                  technology especially Linux operations.
                  <MDBIcon icon="quote-right" />
                </h5>
                <h4 className="font-weight-bold my-1 pt-2">
                  Professor Dr. Orkid Coskuner Weber
                </h4>
                <h6 className="font-weight-bold my-3">
                  Turkish-German University Department of Molecular
                  Biotechnology
                </h6>
                <MDBIcon icon="star" className="cyan-text" />
                <MDBIcon icon="star" className="cyan-text" />
                <MDBIcon icon="star" className="cyan-text" />
                <MDBIcon icon="star" className="cyan-text" />
                <MDBIcon icon="star" className="cyan-text" />
              </MDBTestimonial>
            </MDBCarouselItem>
            <MDBCarouselItem itemId="2">
              <MDBTestimonial>
                <h5>
                  <MDBIcon icon="quote-left" /> Jacob Cavazos is the rare
                  individual that not only possess a high intellectual gift but
                  also an astounding work ethic. The combination has allowed
                  Jacob to set himself as a standard of excellence in all of his
                  endeavors. I attended the same university as Jacob while he
                  performed undergraduate computational research. Jacob was an
                  exemplar for aspiring undergraduate researchers such as
                  myself. Jacob made significant progress with respect to
                  computational chemistry research and is still frequently
                  consulted for his work and capabilities in the field. With
                  respect to Web Development and DevOps tools/practices, I
                  attended the Tech Talent South DevOps Bootcamp with Jacob.
                  Jacob not only stood out as the most informed/capable student
                  in group but he also studied so much of the material in his
                  spare time that our instructor permitted Jacob to lead the
                  instructional lecture over Vagrant boxes. Not only was Jacob’s
                  lecture extremely helpful to the class; the instructor
                  acquired permission from Jacob to use the material for future
                  courses. Jacob Cavazos is driven by the standard of excellence
                  in all of his work and I am confident he will bring that
                  standard to any project or company he is involved with.
                  <MDBIcon icon="quote-right" />
                </h5>
                <h4 className="font-weight-bold my-1 pt-2">
                  Joshua Davidson | Ruby on Rails Developer
                </h4>
                <h6 className="font-weight-bold my-3">
                  Nogalitos Gear CO | University of Texas at San Antonio
                </h6>
                <MDBIcon icon="star" className="cyan-text" />
                <MDBIcon icon="star" className="cyan-text" />
                <MDBIcon icon="star" className="cyan-text" />
                <MDBIcon icon="star" className="cyan-text" />
                <MDBIcon icon="star" className="cyan-text" />
              </MDBTestimonial>
            </MDBCarouselItem>
          </MDBCarouselInner>
        </MDBCarousel>
      </section>
    </MDBContainer>
  )
}

export default TestimonialsPage

import React from 'react'
import { MDBRow, MDBCol, MDBIcon, Animation, MDBContainer } from 'mdbreact'

const FeaturesPage = () => {
  return (
    <section id="about" className="text-center my-3">
      <MDBContainer>
        <MDBRow>
          <MDBCol>
            <Animation reveal type="zoomIn" duration="500ms">
              <MDBIcon className="cyan-text mb-2" icon="user-ninja" size="3x" />
            </Animation>
            <h3 className="responsive font-weight-bold my-2">About Me</h3>
            <p className="lead black-text mx-auto mb-5">
              Hello, my name is Jacob Cavazos and thank you visiting my personal
              website. I am a high-performing results-driven IT Operations and
              Software Development Engineer with comprehensive experience across
              multiple IT projects, web application development and integration,
              infrastructure management, and quality assurance in dynamic,
              high-impact, and fast-paced environments. I thrive in driving
              business growth, directing creative and technical initiatives,
              providing operational support, and implementing cutting-edge
              information solutions to address business opportunities and
              organizational growth.
            </p>
            <p className="lead black-text mx-auto mb-5">
              This site was built as a static site using React featuring a CI/CD
              pipeline using Semaphore that deploys to my UpCloud Virtual
              Private Server running CentOS on this domain as well as
              concurrently to an{' '}
              <a href="https://jakecavazos.com"> AWS S3 bucket</a> and{' '}
              <a href="https://jakecavazos.host"> Google Firebase</a> as well as
              creating and pushing a docker image to my{' '}
              <a href="https://cloud.docker.com/repository/docker/jcavazos/dockerize-personal-site">
                public repository
              </a>
            </p>
          </MDBCol>
        </MDBRow>
        <MDBRow className="mx-auto pl-2 pr-2">
          <MDBCol lg="4" className="mx-auto">
            <Animation reveal type="zoomIn" duration="500ms">
              <MDBIcon className="cyan-text" icon="space-shuttle" size="3x" />
            </Animation>
            <h5 className="font-weight-bold my-4">Adventure</h5>
            <p className="black-text mb-lg-0 mb-5">
              I believe in enjoying life and the importance of being in the the
              moment so I aim to live with a sense of adventure. I am not afraid
              of failure so by extending myself beyond my level of comfort in a
              controlled manner. I am always pushing to learn continuously
              through direct experience. I enjoy learning as much as I can and
              living as an gift and treasure to be enjoyed because to me my
              memories are more precious than luxurious material possessions
              which seem to come and go with the ebb and flow of time. Each day
              truly brings about new opportunities for education and adventures
              which should be seized upon in fulfillment of a well lived and
              meaningful existence.
            </p>
          </MDBCol>
          <MDBCol lg="4" className="mx-auto">
            <Animation reveal type="zoomIn" duration="500ms">
              <MDBIcon className="cyan-text" icon="hat-wizard" size="3x" />
            </Animation>
            <h5 className="font-weight-bold my-4">Experience</h5>
            <p className="black-text mb-lg-0 mb-5">
              I have over four years of experience in an academic computational
              research laboratory and nine years of experience using Linux
              command line interface mostly with Red Hat and CentOS but I have
              been learning and utilizing Ubuntu quite a bit over the past year
              as well. I have been involved in web development for almost two
              years starting out with WordPress and PHP but my more recent focus
              lies within the realm of JavaScript and Ruby on Rails full stack
              web application development. During the past year in a concerted
              effort to transition into DevOps from operational and
              administrative roles I dedicated myself to learning Ruby and
              JavaScript because I believe that if you can't develop software
              then you will not be very successful in the modern software and
              information technology culture..
            </p>
          </MDBCol>
          <MDBCol lg="4" className="mx-auto">
            <Animation reveal type="zoomIn" duration="500ms">
              <MDBIcon className="cyan-text" icon="laugh-beam" size="3x" />
            </Animation>
            <h5 className="font-weight-bold my-4">Happiness</h5>
            <p className="black-text mb-lg-0 mb-5">
              Philosophy is very important to me. Throughout my life I have
              struggled for purpose and sought for meaning as we all must and
              within that struggle I have found that the only true meaning I
              have garnered and which brings me a happy and purposeful existence
              is a dedication to responsibility and stewardship. I firmly
              believe in assisting others, sharing, teaching, and generally
              leaving things in a better state than when I first encounter them.
              I feel that by our very existence we are burdened with this task
              and that it is instrumental to self fulfillment. Experience has
              taught me that you always get back more than you give away and so
              I am driven by this underpinning to work hard in dedicated to life
              long learning.
            </p>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>
  )
}

export default FeaturesPage

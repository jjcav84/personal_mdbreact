import React from "react"
import { TwitterTimelineEmbed } from "react-twitter-embed"
import { MDBContainer, MDBRow } from "mdbreact"

const TwitterTimeline = () => {
  return (
    <section id="twitter">
      <MDBContainer>
        <MDBRow center>
          <div>
            <TwitterTimelineEmbed
              sourceType="URL"
              url="https://twitter.com/jcavazos84"
              options={{ width: 600, height: 550 }}
            />
          </div>
        </MDBRow>
      </MDBContainer>
    </section>
  )
}

export default TwitterTimeline

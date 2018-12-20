import React from 'react';
import { TwitterTimelineEmbed } from 'react-twitter-embed';
import { MDBContainer, MDBRow } from 'mdbreact';

const TwitterTimeline = () => {
  return (
    <section className="text-center mx-4 my-5">
    <h3 className="h3-responsive font-weight-bold my-4">
        My Twitter Feed
      </h3>
    <MDBContainer>
    <MDBRow center>
    <div className="mx-autot">
        <TwitterTimelineEmbed sourceType="url"          url="https://twitter.com/jcavazos84" 
        options={{width:500, height: 650}} />
    </div>
    </MDBRow>
    </MDBContainer>
    </section>
    );
  }
  
  export default TwitterTimeline;  


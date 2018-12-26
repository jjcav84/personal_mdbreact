import React from 'react';
import { Helmet } from 'react-helmet';
import TestimonialsPage from './components/TestimonialsPage.jsx';
import VideoBackgroundPage from './components/VideoBackgroundPage.jsx';
import FeaturesPage from './components/FeaturesPage.jsx';
import SkillsPage from './components/SkillsPage.jsx';
import ContactPage from './components/ContactPage.jsx';
import FooterPage from './components/FooterPage.jsx';
import AccordionPage from './components/AccordionPage.jsx';
import TwitterTimeline from './components/TwitterTimeline.jsx';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      someData: null,
    };
  }
  render() {
    return (
      <div>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Jacob Cavazos | Personal Website </title>
          <link rel="canonical" href="https://jacobcavazos.com/" />
        </Helmet>
        <VideoBackgroundPage />
        <FeaturesPage />
        <SkillsPage />
        <ContactPage />
        <TestimonialsPage />
        <TwitterTimeline />
        <AccordionPage />
        <FooterPage />
      </div>
    );
  }
}

export default App;
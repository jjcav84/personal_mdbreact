import React from 'react';
import {Helmet} from "react-helmet";
import TestimonialsPage from './components/TestimonialsPage.js';
import VideoBackgroundPage from './components/VideoBackgroundPage.js';
import FeaturesPage from './components/FeaturesPage.js';
import SkillsPage from './components/SkillsPage.js';
import MapPage from './components/MapPage.js';
import FooterPage from './components/FooterPage.js';
import AccordionPage from './components/AccordionPage.js';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Jacob Cavazos | Personal Website</title>
        <link rel="canonical" href="https://jacobcavazos.com/" />
      </Helmet>
      <VideoBackgroundPage />
      <FeaturesPage />
      <SkillsPage />
      <MapPage />
      <TestimonialsPage />
      <AccordionPage />
      <FooterPage />
      </div>
    );
  }
}

export default App;
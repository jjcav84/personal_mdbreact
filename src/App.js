import React from "react"
import { Helmet } from "react-helmet"
import VideoBackgroundPage from "./components/VideoBackgroundPage"
import FeaturesPage from "./components/FeaturesPage"
import SkillsPage from "./components/SkillsPage"
import FooterPage from "./components/FooterPage"
import "./App.css"

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      someData: null
    }
  }
  render() {
    return (
      <div>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Jacob Cavazos | Personal Website </title>
          <link rel="canonical" href="https://jacobcavazos.com/" />
          <script src="https://cdn.pagesense.io/js/visualcloudfx/db681c52522e45d7ba819c54a8c88ab4.js" />
        </Helmet>
        <VideoBackgroundPage />
        <FeaturesPage />
        <SkillsPage />
        <FooterPage />
      </div>
    )
  }
}

export default App

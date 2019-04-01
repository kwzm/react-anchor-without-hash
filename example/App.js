import React from 'react'
import Anchor from '../dist/Anchor'
import './index.css'

class App extends React.Component {
  render() {
    return (
      <div>
        <div className="navbar">
          <a href="/#demo?to=section1">section1</a>
          <a href="/#demo?to=section2">section2</a>
          <a href="/#demo?to=section3">section3</a>
          <a href="/#demo?to=section4">section4</a>
        </div>
        <Anchor name="section1">
          <div className="section section1">
            <h2>This is section1</h2>
            <div>There are some text...</div>
          </div>
        </Anchor>
        <Anchor name="section2">
          <div className="section section2">
            <h2>This is section2</h2>
            <div>There are some text...</div>
          </div>
        </Anchor>
        <Anchor name="section3">
          <div className="section section3">
            <h2>This is section3</h2>
            <div>There are some text...</div>
          </div>
        </Anchor>
        <Anchor name="section4">
          <div className="section section4">
            <h2>This is section4</h2>
            <div>There are some text...</div>
          </div>
        </Anchor>
      </div>
    )
  }
}

export default App
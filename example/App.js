import React from 'react'
import Anchor from '../src/Anchor'
import './index.css'

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      type: 'scrollIntoView',
      interval: 0
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleTopChange = this.handleTopChange.bind(this)
  }

  handleChange() {
    var radios = document.getElementsByName('type')

    radios.forEach(item => {
      if(item.checked) {
        this.setState({
          type: item.value
        })
        return 
      }
    })
  }

  handleTopChange(e) {
    this.setState({
      interval: e.target.value
    })
  }

  render() {
    const { type, interval } = this.state
    const { pathname } = window.location
    const anchorProps = type === 'scrollIntoView' ? {
      type
    } : {
      type,
      interval
    }

    return (
      <div>
        <div className="types">
          <span>Which type do you want?</span>
          <label>
            <input 
              name="type" 
              type="radio" 
              value="scrollIntoView" 
              checked={type === 'scrollIntoView'}
              onChange={this.handleChange}
            />
            scrollIntoView
          </label>
          <label>
            <input 
              name="type" 
              type="radio" 
              value="scrollTop"
              checked={type === 'scrollTop'}
              onChange={this.handleChange} 
            />
            scrollTop
          </label>
        </div>
        {type === 'scrollTop' && (
          <div className="interval-top">
            <label>interval:</label>
            <input 
              value={interval}
              type="number" 
              onChange={this.handleTopChange}
            />
          </div>
        )}
        <div className="navbar">
          <a href={`${pathname}#demo?_to=section1`}>section1</a>
          <a href={`${pathname}#demo?_to=section2`}>section2</a>
          <a href={`${pathname}#demo?_to=section3`}>section3</a>
          <a href={`${pathname}#demo?_to=section4`}>section4</a>
        </div>
        <Anchor name="section1" {...anchorProps}>
          <div className="section section1">
            <h2>This is section1</h2>
            <div>There are some text...</div>
          </div>
        </Anchor>
        <Anchor name="section2" {...anchorProps}>
          <div className="section section2">
            <h2>This is section2</h2>
            <div>There are some text...</div>
          </div>
        </Anchor>
        <Anchor name="section3" {...anchorProps}>
          <div className="section section3">
            <h2>This is section3</h2>
            <div>There are some text...</div>
          </div>
        </Anchor>
        <Anchor name="section4" {...anchorProps}>
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
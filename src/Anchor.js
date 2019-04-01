import React from 'react'
import uniqid from 'uniqid'
import queryString from 'query-string'

const prefix = 'anchor-'

const getSearch = () => {
  const { location } = window

  const result = location.href.split('?')[1]

  if(result) {
    return `?${result}`
  }
}

const getAnchor = (anchorKey) => {
  const parsed = queryString.parse(getSearch())

  return parsed[anchorKey]
}

class Anchor extends React.Component {
  constructor(props) {
    super(props)

    this.isEnable = !!getAnchor(props.anchorKey)
    this.id = uniqid(prefix)
    this.handleHashChange = this.handleHashChange.bind(this)
    this.scroll = this.scroll.bind(this)
  }

  componentDidMount() {
    if (this.isEnable) {
      if ('scrollRestoration' in history) {
        history.scrollRestoration = 'manual'
      }
      window.addEventListener("hashchange", this.handleHashChange)
      this.scroll()
    }
  }

  componentWillUnmount() {
    if (this.isEnable) {
      if ('scrollRestoration' in history) {
        history.scrollRestoration = 'auto'
      }
      window.removeEventListener("hashchange", this.handleHashChange)
    }
  }

  scroll() {
    const { name, anchorKey, scrollIntoViewOption } = this.props
    const anchor = getAnchor(anchorKey)

    if (name === anchor) {
      const dom = document.getElementById(this.id)

      if (dom.scrollIntoView) {
        dom.scrollIntoView(scrollIntoViewOption)
      }
    }
  }

  handleHashChange() {
    this.scroll()
  }

  render() {
    const { children } = this.props

    return (
      <div id={this.id}>
        {children}
      </div>
    )
  }
}

Anchor.defaultProps = {
  anchorKey: '_to',
  scrollIntoViewOption: true
}

export default Anchor
import React from 'react'
import uniqid from 'uniqid'
import queryString from 'query-string'

const prefix = 'anchor-'
const SCROLL_INTO_VIEW = 'scrollIntoView'
const SCROLL_TOP = 'scrollTop'

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
    this.scrollIntoView = this.scrollIntoView.bind(this)
    this.scrollTop = this.scrollTop.bind(this)
  }

  componentDidMount() {
    if (this.isEnable) {
      const { type } = this.props

      if ('scrollRestoration' in history) {
        history.scrollRestoration = 'manual'
      }

      if (type === SCROLL_INTO_VIEW) {
        window.addEventListener("hashchange", this.handleHashChange)
        this.scrollIntoView()
      } 

      if (type === SCROLL_TOP) {
        this.scrollTop()
      }
    }
  }

  componentWillUnmount() {
    if (this.isEnable) {
      const { type } = this.props

      if ('scrollRestoration' in history) {
        history.scrollRestoration = 'auto'
      }

      if (type === SCROLL_INTO_VIEW) {
        window.removeEventListener("hashchange", this.handleHashChange)
      }
    }
  }

  scrollIntoView() {
    const { name, anchorKey, scrollIntoViewOption } = this.props
    const anchor = getAnchor(anchorKey)

    if (name === anchor) {
      const dom = document.getElementById(this.id)

      if (dom.scrollIntoView) {
        setTimeout(() => {
          dom.scrollIntoView(scrollIntoViewOption)
        },0)
      }
    }
  }

  scrollTop() {
    const { name, anchorKey, container, interval } = this.props
    const anchor = getAnchor(anchorKey)

    if (name === anchor) {
      const cont = document.querySelector(container)
      const dom = document.getElementById(this.id)

      if (!cont) {
        throw "container can't match any element"
      }

      if (Number.isNaN(interval)) {
        throw "interval must be a number"
      }

      setTimeout(() => {
        cont.scrollTop = dom.offsetTop + Number(interval)
      },0)
    }
  }

  handleHashChange() {
    const { type } = this.props

    if (type === SCROLL_INTO_VIEW) {
      this.scrollIntoView()
    }

    if (type === SCROLL_TOP) {
      this.scrollTop()
    }
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
  type: SCROLL_INTO_VIEW,
  scrollIntoViewOption: true,
  container: 'html',
  interval: 0
}

export default Anchor
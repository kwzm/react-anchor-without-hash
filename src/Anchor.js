import React from 'react'
import PropTypes from 'prop-types'
import invariant from 'invariant'
import { getSearchParams, isNumber, setScrollTop } from './utils'

export const SCROLL_INTO_VIEW = 'scrollIntoView'
export const SCROLL_TOP = 'scrollTop'

class Anchor extends React.Component {
  constructor(props) {
    super(props)

    this.anchorRef = React.createRef()
    this.handleHashChange = this.handleHashChange.bind(this)
    this.scroll = this.scroll.bind(this)
    this.scrollIntoView = this.scrollIntoView.bind(this)
    this.scrollTop = this.scrollTop.bind(this)
  }

  componentDidMount() {
    const { anchorKey } = this.props

    if (getSearchParams(anchorKey)) {
      this.scroll()
    }

    // Chrome keeps track of where you've been
    // https://developer.mozilla.org/en-US/docs/Web/API/History
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual'
    }

    window.addEventListener("hashchange", this.handleHashChange)
  }

  componentWillUnmount() {
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'auto'
    }

    window.removeEventListener("hashchange", this.handleHashChange)
  }

  handleHashChange() {
    this.scroll()
  }

  scroll() {
    const { type } = this.props

    if (type === SCROLL_INTO_VIEW) {
      this.scrollIntoView()
    }

    if (type === SCROLL_TOP) {
      this.scrollTop()
    }
  }

  scrollIntoView() {
    const { name, anchorKey, scrollIntoViewOption } = this.props
    const anchor = getSearchParams(anchorKey)

    if (name === anchor) {
      const dom = this.anchorRef.current

      if (dom.scrollIntoView) {
        setTimeout(() => {
          dom.scrollIntoView(scrollIntoViewOption)
        }, 0)
      }
    }
  }

  scrollTop() {
    const { name, anchorKey, container, interval } = this.props
    const anchor = getSearchParams(anchorKey)

    if (name === anchor) {
      invariant(isNumber(interval), 'interval must be a number')
      const dom = this.anchorRef.current
      const scrollTop = dom.offsetTop + Number(interval)

      if (container) {
        const cont = document.querySelector(container)

        invariant(cont, "container can't match any element")

        setTimeout(() => {
          cont.scrollTop = scrollTop
        }, 0)
      } else {
        setScrollTop(scrollTop)
      }
    }
  }

  render() {
    const { children } = this.props

    return (
      <div ref={this.anchorRef}>
        {children}
      </div>
    )
  }
}

Anchor.defaultProps = {
  anchorKey: '_to',
  type: SCROLL_INTO_VIEW,
  scrollIntoViewOption: true,
  interval: 0
}

Anchor.protoTypes = {
  anchorKey: PropTypes.string,
  type: PropTypes.oneOf([SCROLL_INTO_VIEW, SCROLL_TOP]),
  scrollIntoViewOption: PropTypes.oneOf([
    PropTypes.bool,
    PropTypes.object
  ]),
  container: PropTypes.string,
  interval: PropTypes.number
}

export default Anchor

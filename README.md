# react-anchor-without-hash
A anchor react component use url search string without hash.
This component solves the problem that hash anchors cannot be used when using the hash router. 
## install
`npm i react-anchor-without-hash`
## usage
```
import Anchor from 'react-anchor-without-hash'

......

<Anchor name="section1">
  <div className="section section1">
    <h2>This is section1</h2>
    <div>There are some text...</div>
  </div>
</Anchor>
```
When url search includes '_to=section1', the section1 will scroll into view.
You can go to the [example](https://github.com/kwzm/react-anchor-without-hash/blob/master/example/App.js) for details.
## options
#### `anchorKey` PropTypes.string
Url search key for the anchor, default is '_to'.
#### `scrollIntoViewOption` PropTypes.oneOfType([
  PropTypes.bool,
  PropTypes.object
])
Options passed when [scrollIntoView](https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollIntoView) is used. 
## License
MIT

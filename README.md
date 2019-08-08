English | [简体中文](./README_zh-CN.md)

# react-anchor-without-hash
![GitHub package.json version](https://img.shields.io/github/package-json/v/kwzm/react-anchor-without-hash)
[![Build Status](https://travis-ci.org/kwzm/react-anchor-without-hash.svg?branch=master)](https://travis-ci.org/kwzm/react-anchor-without-hash)
[![Coverage Status](https://coveralls.io/repos/github/kwzm/react-anchor-without-hash/badge.svg?branch=master)](https://coveralls.io/github/kwzm/react-anchor-without-hash?branch=master)
![npm bundle size](https://img.shields.io/bundlephobia/min/react-anchor-without-hash)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)  
A anchor react component use url search string without hash.
This component solves the problem that hash anchors cannot be used when using the hash router. 
This is a good solution for projects that need to use hash routing compatible with older browsers (IE9) but want to use anchor points
## Online Demo
[https://kwzm.github.io/react-anchor-without-hash/](https://kwzm.github.io/react-anchor-without-hash/)
## codesandbox
[https://codesandbox.io/embed/react-anchor-without-hash-2xq2h](https://codesandbox.io/embed/react-anchor-without-hash-2xq2h)
## Install
```sh
$ npm i react-anchor-without-hash
```
## Usage
### scrollIntoView(default)
The effect is the same as [scrollIntoView]((https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollIntoView)).
When url search includes '_to=section1', the section1 will scroll into view area.
```js
import Anchor from 'react-anchor-without-hash'

// ......

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
```
### scrollTop
The effect is the same as [scrollTop]((https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollTop)).
When url search includes '_to=section1', the section1 will scroll into view area with 50px top margin.
> note:  
1.Because offsetTop is used internally to get the height of the scroll, you need to make sure have a [positioned containing element](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/offsetParent).  
2.Interval can allow negative values

```js
import Anchor from 'react-anchor-without-hash'

// ......

const anchorProps = {
  type: 'scrollTop',
  container: '#container',
  interval: 50
}

<div style={{position: 'relative'}}>
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
</div>
```
## Options
### common options
#### `type: string`
Specifies the mechanism for internal execution.
- scrollIntoView: use [element.scrollIntoView](https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollIntoView) api
- scrollTop: use [element.scrollTop](https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollTop) api
#### `anchorKey: string`
Url search key for the anchor, default is '_to'.
### scrollIntoView options
#### `scrollIntoViewOption: boolean | object`
Options passed when [scrollIntoView](https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollIntoView) is used. 
### scrollTop options
#### `container: string`
Specifies which element performs scrollTop, if not, scrollTop is set by default using one of the following options:
- document.body.scrollTop
- document.documentElement.scrollTop
- window.pageYOffset
> note: This option is the parameter for the [document.querySelector](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector), so choose the type it supports.
#### `interval: number`
Specifies the distance from the top, which defaults to 0.
The actual scrollTop equals:
```js
document.querySelector(container).scrollTop = document.getElementById(anchor).offsetTop + interval
```
## License
MIT

[English](./README.md) | 简体中文

# react-anchor-without-hash
![GitHub package.json version](https://img.shields.io/github/package-json/v/kwzm/react-anchor-without-hash)
[![Build Status](https://travis-ci.org/kwzm/react-anchor-without-hash.svg?branch=master)](https://travis-ci.org/kwzm/react-anchor-without-hash)
[![Coverage Status](https://coveralls.io/repos/github/kwzm/react-anchor-without-hash/badge.svg?branch=master)](https://coveralls.io/github/kwzm/react-anchor-without-hash?branch=master)
![npm bundle size](https://img.shields.io/bundlephobia/min/react-anchor-without-hash)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)  
一个使用 url search 而不是 hash 的 react 锚点组件。
这个组件解决了 hash 锚点 无法被用于 hash router 的问题。
## 在线示例
[https://kwzm.github.io/react-anchor-without-hash/](https://kwzm.github.io/react-anchor-without-hash/)
## codesandbox
[https://codesandbox.io/embed/react-anchor-without-hash-2xq2h](https://codesandbox.io/embed/react-anchor-without-hash-2xq2h)
## 安装
```sh
$ npm i react-anchor-without-hash
```
## 使用
react-anchor-without-hash 有两种使用方法，一种内部基于 scrollIntoView(默认的)，一种基于 scrollTop。
### scrollIntoView(default)
这种效果和 [scrollIntoView]((https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollIntoView)) 一样。
当 url 的 search 包含 '_to=section1' 时，Anchor `name = section1` 的组件就会滚动到滚动到可视区域。 
想了解详情可以去看这个 [例子](https://github.com/kwzm/react-anchor-without-hash/blob/master/example/App.js)。
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
这种效果和 [scrollTop]((https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollTop)) 一样，它与 scrollIntoView 的不同是它可以设置在哪个区域内滚动，并且可以设置上边距。
当 url 的 search 包含 '_to=section1' 时，Anchor `name = section1` 的组件就会滚动到滚动到可视区域并带有 50px 的上边距。
想了解详情可以去看这个 [例子](https://github.com/kwzm/react-anchor-without-hash/blob/master/example/App.js)。
> 注意:  
1.因为 `offsetTop` 被用于内部获取滚动的高度，所以你需要确保被滚动的元素有一个[定位父元素](https://developer.mozilla.org/zh-CN/docs/Web/API/HTMLElement/offsetParent)。  
2.interval 可以允许为负值。
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
## 参数
### 公共参数
#### `type: string` 
指定内部执行的机制。
- scrollIntoView: 使用[element.scrollIntoView](https://developer.mozilla.org/zh-CN/docs/Web/API/Element/scrollIntoView) api
- scrollTop: 使用 [element.scrollTop](https://developer.mozilla.org/zh-CN/docs/Web/API/Element/scrollTop) api
#### `anchorKey: string`
Url 锚点的 search 键，默认是 '_to'。
### scrollIntoView 参数
#### `scrollIntoViewOption: boolean | object` 
[scrollIntoView](https://developer.mozilla.org/zh-CN/docs/Web/API/Element/scrollIntoView) 所需要的 options。 
### scrollTop options
#### `container` PropTypes.string
指定哪个元素进行垂直滚动，默认值为 html。
> 注意: 这个选项内部会作为 [document.querySelector](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector) 的参数，所以请选择其支持的类型。
#### `interval: number`
指定距离顶部的距离，默认是 0。
实际的 scrollTop 计算如下:
```js
document.querySelector(container).scrollTop = document.getElementById(anchor).offsetTop + interval
```
## License
MIT

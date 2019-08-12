import URLSearchParams from '@ungap/url-search-params'

// location.search cannot be used because of hash 
// e.g. https://www.test.org/#test?_to=anchor1
// location.search = ''
const getSearch = () => {
  const { location } = window
  const result = location.href.split('?')[1]

  if (result) {
    return `?${result}`
  }
}

export const getSearchParams = (key) => {
  const params = new URLSearchParams(getSearch())

  return params.get(key)
}


export const isNumber = (val) => {
  // IE9 toString.call() 报错：调用的对象无效
  // 应为 window.toString !== Object.prototype.toString
  if (Object.prototype.toString.call(val) === '[object Number]') {
    if (isNaN(val)) {
      return false
    }

    return true
  }
  return false
}

// 为了兼容 IE Edge Chrome
export const setScrollTop = (val) => {
  document.documentElement.scrollTop = val
  window.pageYOffset = val
  document.body.scrollTop = val
}
import { getSearchParams, isNumber, setScrollTop } from '../src/utils'

describe('test utils', () => {
  describe.each([
    ['/#test?_to=anchor1', '_to', 'anchor1'],
    ['/#test?filed1=1&filed2=2&$target=anchor2', '$target', 'anchor2']
  ])("path is %s, run getSearchParams('%s')", (url, key, expected) => {
    test(`expect return is ${expected}`, () => {
      // jest unable to modify directly window.location
      // https://github.com/facebook/jest/issues/5124 
      history.replaceState({}, 'Test', url);
      expect(getSearchParams(key)).toBe(expected)
    })
  })

  describe.each([
    [100, true],
    [-100, true],
    ['100', false],
    [true, false],
    [undefined, false],
    [null, false],
    [Symbol('test'), false],
    [NaN, false]
  ])("value %s, run isNumber(%s)", (val, expected) => {
    test(`expect return is ${expected}`, () => {
      expect(isNumber(val)).toBe(expected)
    })
  })

  describe('test setScrollTop', () => {
    test('expect scrollTop is 100', () => {
      setScrollTop(100)

      expect(document.documentElement.scrollTop).toBe(100)
      expect(window.pageYOffset).toBe(100)
      expect(document.body.scrollTop).toBe(100)
    })
  })
})




import React from 'react'
import Anchor, { SCROLL_TOP } from '../src/Anchor'
import { mount } from 'enzyme'

// we can't test element.scrollTop because of jsdom don't implement scrollIntoView
// https://github.com/jsdom/jsdom/issues/1695
describe('Anchor', () => {
  beforeAll(() => {
    Element.prototype.scrollIntoView = jest.fn()
  });

  describe('scrollIntoView', () => {
    test('should run this.scrollIntoView when Anchor mount', () => {
      history.replaceState({}, 'Test', '/#demo?_to=section1')
      const spy = jest.spyOn(Anchor.prototype, 'scrollIntoView')
      mount(<Anchor name="section1" />)

      expect(spy).toHaveBeenCalled()
    })

    test('should run this.scrollIntoView when hash change', async () => {
      history.replaceState({}, 'Test', '/#demo?_to=section1')

      const spy1 = jest.spyOn(Anchor.prototype, 'handleHashChange')
      const spy2 = jest.spyOn(Anchor.prototype, 'scrollIntoView')

      mount(<Anchor name="section2" />)

      location.hash = 'demo?_to=section2'

      await new Promise((resolve) => setTimeout(resolve, 0))

      expect(spy1).toHaveBeenCalled()
      expect(spy2).toHaveBeenCalled()
    })
  })

  describe('scrollTop', () => {
    test(`parameters of the interval should be a number`, () => {
      const wrapper = mount(
        <Anchor
          name="section1"
          type={SCROLL_TOP}
          interval="100"
        />
      )

      history.replaceState({}, 'Test', '/#demo?_to=section1')
      expect(() => {
        wrapper.instance().scrollTop()
      }).toThrow('interval must be a number')
    })

    test(`parameters of the container should match a element`, () => {
      history.replaceState({}, 'Test', '/')

      const wrapper = mount(
        <Anchor
          name="section1"
          type={SCROLL_TOP}
          container="#test"
        />
      )

      history.replaceState({}, 'Test', '/#demo?_to=section1')
      expect(() => {
        wrapper.instance().scrollTop()
      }).toThrow("container can't match any element")
    })

    test('should run this.scrollTop in when Anchor mount', async () => {
      history.replaceState({}, 'Test', '/#demo?_to=section1')
      const spy = jest.spyOn(Anchor.prototype, 'scrollTop')
      mount(
        <Anchor
          name="section1"
          type={SCROLL_TOP}
        />
      )

      await new Promise((resolve) => setTimeout(resolve, 0))

      expect(spy).toHaveBeenCalled()
    })

    test('should run this.scrollTop in when hash change', async () => {
      history.replaceState({}, 'Test', '/#demo?_to=section1')
      const spy = jest.spyOn(Anchor.prototype, 'scrollTop')
      mount(
        <Anchor
          name="section2"
          type={SCROLL_TOP}
        />
      )

      location.hash = 'demo?_to=section2'

      await new Promise((resolve) => setTimeout(resolve, 0))

      expect(spy).toHaveBeenCalled()
    })

    test(`container scrollTop should be Anchor's offsetTop + interval`, async () => {
      const div = document.createElement('div')

      div.setAttribute('id', 'container')
      div.style.setProperty('position', 'relative')
      document.body.appendChild(div)

      history.replaceState({}, 'Test', '/#demo?_to=section1')

      mount((
        <Anchor
          name="section1"
          type={SCROLL_TOP}
          container="#container"
          interval={100}
        />
      ), { attachTo: div })

      await new Promise((resolve) => setTimeout(resolve, 0))

      expect(div.scrollTop).toBe(100)
    })
  })
})
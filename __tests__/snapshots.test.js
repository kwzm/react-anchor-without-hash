import React from 'react'
import renderer from 'react-test-renderer'
import Anchor from '../src/Anchor'

describe('<Anchor/>', () => {
  test('renders correctly', () => {
    const tree = renderer.create(<Anchor name="section1" />).toJSON()

    expect(tree).toMatchSnapshot()
  });

  test('renders with children correctly', () => {
    const tree = renderer.create(
      <Anchor name="section1">
        <div className="section section1">
          <h2>This is section1</h2>
          <div>There are some text...</div>
        </div>
      </Anchor>
    ).toJSON()

    expect(tree).toMatchSnapshot()
  });

  test('renders with scrollTop correctly', () => {
    const anchorProps = {
      type: 'scrollTop',
      interval: 50
    }

    const tree = renderer.create(
      <Anchor name="section1" {...anchorProps}>
        <div className="section section1">
          <h2>This is section1</h2>
          <div>There are some text...</div>
        </div>
      </Anchor>
    ).toJSON()

    expect(tree).toMatchSnapshot()
  });
});

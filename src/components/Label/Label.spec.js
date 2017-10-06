import React from 'react';
import { shallow } from 'enzyme';
import {
  Label
} from './Label';

import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const type = 'approved';
  const tree = renderer.create(
    <Label type={ type }></Label>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
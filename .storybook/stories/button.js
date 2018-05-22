import React from 'react';
import { storiesOf } from '@storybook/react';

import { Button } from '../../src/components/button';

storiesOf('Button', module)
  .add('with default styling', () => (
    <Button>Click me</Button>
  ))
  .add('with primary', () => (
    <div>
      <Button>Secondary</Button>
      <Button inverted>Inverted</Button>
    </div>
  ))
  .add('with click handler', () => (
    <Button onClick={() => alert('Hello World')}>Click me</Button>
  ))

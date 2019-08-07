import { configure } from '@storybook/react';
import '../src/styles/global.scss';

const req = require.context('../src', true, /stories\.js$/)

function loadStories() {
  req.keys().forEach(req)
}

configure(loadStories, module);

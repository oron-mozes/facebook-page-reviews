import React from 'react';
import { render } from 'react-dom';
import Gallery from './Gallery';

const App = () => (
  <div>
    <Gallery/>
  </div>
);

render(<App />, document.getElementById('root'));

import React from 'react';
import Content from '../Content';
import Hero from '../Hero';
import './style.scss';

/**
 * The main application, consisting of a hero and content component.
 * @returns {object} App
 */
const App = () => (
  <div>
    <Hero />
    <Content />
  </div>
);

export default App;

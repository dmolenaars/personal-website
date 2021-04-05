import React from 'react';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import Body from '../Body';
import './style.scss';

/**
 * The main content container, consisting of a parallax layer
 * in order to simulate a fixed view when scrolling down.
 * @returns {object} Content
 */
const Content = () => (
  <Parallax pages={2}>
    <ParallaxLayer offset={0.94} speed={0}>
      <div className="content-container">
        <Body />
      </div>
    </ParallaxLayer>
  </Parallax>
);

export default Content;

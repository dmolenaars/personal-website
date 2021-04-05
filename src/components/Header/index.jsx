import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Animation from '../Animation';
import './style.scss';

/**
 * The hero contentm containing a header, subheader, and animation.
 * @param {object} props Contains a main header and subheader string.
 */
const Header = (props) => {
  const { mainHeader, subHeader } = props;
  const [typedHeader, setTypedHeader] = useState('');

  /**
   * Simulates a typing animation for a given string.
   * Typing speed increases as the typing progresses.
   * @function generateTitle
   * @param {string} text The text string to be typed.
   */
  const generateTypingAnimation = (text) => {
    const MINIMUM_TYPE_SPEED = 50;
    const MAXIMUM_TYPE_SPEED = 90;
    const INITIAL_DELAY = 700;
    let typedText = '';
    let typeSpeed = 0;
    text.split('').forEach((character) => {
      typeSpeed += Math.random() * (MAXIMUM_TYPE_SPEED - MINIMUM_TYPE_SPEED) + MINIMUM_TYPE_SPEED;
      setTimeout(() => {
        typedText += character;
        setTypedHeader(typedText);
      }, INITIAL_DELAY + typeSpeed);
    });
  };

  useEffect(() => {
    generateTypingAnimation(subHeader);
  }, [subHeader]);

  return (
    <div className="header-container">
      <div className="header">
        {mainHeader}
      </div>
      <div className="code-animation">
        <Animation />
      </div>
      <div className="subheader">
        {typedHeader}
        <span className="blinking-cursor">&nbsp;</span>
      </div>
    </div>
  );
};

Header.propTypes = {
  mainHeader: PropTypes.string.isRequired,
  subHeader: PropTypes.string.isRequired,
};

export default Header;

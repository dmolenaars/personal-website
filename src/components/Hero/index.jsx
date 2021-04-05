import React, { useState } from 'react';
import Header from '../Header';
import './style.scss';

/**
 * Creates a hero with a header, subheader, and coding animation.
 * @returns Hero
 */
const Hero = () => {
  const [mainHeader] = useState('Daniel Molenaars');
  const [subHeader] = useState('Software Engineer @ PostNL');
  return (
    <div className="hero">
      <Header mainHeader={mainHeader} subHeader={subHeader} />
    </div>
  );
};

export default Hero;

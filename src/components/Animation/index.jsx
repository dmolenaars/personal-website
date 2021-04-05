import React from 'react';
import './style.scss';

/**
 * A coding animation with simulated typing.
 * Can be customized using the SCSS configuration.
 * @returns {object} Animation
 */
const Animation = () => (
  <svg width="400px" height="165px" viewBox="0 0 400 165">
    <g id="coding-animation" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
      <g id="line-1">
        <rect id="segment-1" fill="#F92672" x="0" y="0" width="40" height="20" rx="10" />
        <rect id="segment-2" fill="#A6E22E" x="43" y="0" width="60" height="20" rx="10" />
        <rect id="segment-3" fill="#FFD36E" x="106" y="0" width="100" height="20" rx="10" />
        <rect id="segment-4" fill="#FFD36E" x="209" y="0" width="70" height="20" rx="10" />
      </g>
      <g id="line-2" transform="translate(30.000000, 27.000000)">
        <rect id="segment-1" fill="#F92672" x="0" y="0" width="40" height="20" rx="10" />
        <rect id="segment-2" fill="#A6E22E" x="43" y="0" width="60" height="20" rx="10" />
        <rect id="segment-3" fill="#FFD36E" x="106" y="0" width="80" height="20" rx="10" />
      </g>
      <rect id="line-3" fill="#F8F8F2" x="60" y="54" width="290" height="20" rx="10" />
      <rect id="line-4" fill="#F8F8F2" x="60" y="81" width="225" height="20" rx="10" />
      <rect id="line-5" fill="#F92672" x="30" y="108" width="40" height="20" rx="10" />
      <rect id="line-6" fill="#F92672" x="0" y="135" width="40" height="20" rx="10" />
    </g>
  </svg>
);

export default Animation;

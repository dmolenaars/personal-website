import React from 'react';
import '../App/style.scss';
import './style.scss';

const description = (
  <div className="description">
    Diplomat-turned-software engineer.
    I specialize in Cloud Engineering and love designing cloud native architectures.
    Previously active in China for the Ministry of Foreign Affairs.
    In my free time I enjoy reading up on international politics and computers.
  </div>
);

const introduction = (
  <div>
    <h1>About me</h1>
    {description}
  </div>
);

const data = [
  {
    title: 'Organizations I\'ve worked for',
    content: [
      { name: 'Ministry of Foreign Affairs', link: 'https://www.government.nl/ministries/ministry-of-foreign-affairs' },
      { name: 'PostNL', link: 'https://www.postnl.nl/en/' },
    ],
  },
  {
    title: 'Contact me',
    content: [
      { name: 'Email', link: 'mailto:contact@danielmolenaars.com' },
      { name: 'LinkedIn', link: 'https://www.linkedin.com/in/danielmolenaars/' },
      { name: 'GitHub', link: 'https://github.com/dmolenaars' },
    ],
  },
];

const subheaders = data.map((item) => (
  <div>
    <h1>{item.title}</h1>
    {item.content.map((subContent) => (
      <a href={subContent.link}>
        <div className="link">{subContent.name}</div>
      </a>
    ))}
  </div>
));

/**
 * The content body. Includes a description, and customizable components with lists of links.
 * @returns {object} Body
 */
const Body = () => (
  <div className="main-content">
    {introduction}
    {subheaders}
  </div>
);

export default Body;

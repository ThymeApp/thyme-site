import React from 'react';

import Container from 'semantic-ui-react/dist/commonjs/elements/Container';
import Segment from 'semantic-ui-react/dist/commonjs/elements/Segment';
import Header from 'semantic-ui-react/dist/commonjs/elements/Header';
import Button from 'semantic-ui-react/dist/commonjs/elements/Button';

import Logo from '../Logo/Logo';
import Menu from '../Menu/Menu';

import Background from './header-bg.jpg';
import Chrome from './chrome-icon.png';
import Firefox from './firefox-icon.png';

import './Hero.css';

const HeroSegment = props => (
  <div
    style={{ backgroundImage: `url(${Background})`}}
    {...props}
  />
);

const Hero = () => (
  <Segment
    as={HeroSegment}
    inverted
    vertical
    id="Thyme-Header"
    textAlign="center"
  >
    <Menu page="home" />
    <Container text>
      <Logo />
      <Header
        inverted
        as="h1"
        style={{
          fontSize: '3rem',
          margin: '2rem 0',
        }}
      >
        Dead Simple Time Logging
      </Header>
      <div className="HeroButtons">
        <Button
          as="a"
          href="/thyme"
          size="massive"
          basic
          inverted
          style={{ margin: '0.5em' }}
        >
          Start Tracking
        </Button>
      </div>

      <div className="ExtensionsContainer">
        <a href="https://chrome.google.com/webstore/detail/thyme/folhcadkkopbibfggjpoekbiblicffic">
          <img src={Chrome} alt="Get Thyme for Google Chrome"/>
          Get Chrome Extension
        </a>
        <a href="https://addons.mozilla.org/en-US/firefox/addon/thyme">
          <img src={Firefox} alt="Get Thyme for Mozilla Firefox"/>
          Get Firefox Extension
        </a>
      </div>
    </Container>
  </Segment>
);

export default Hero;

import React from 'react';

import Container from 'semantic-ui-react/dist/commonjs/elements/Container';
import Segment from 'semantic-ui-react/dist/commonjs/elements/Segment';
import Header from 'semantic-ui-react/dist/commonjs/elements/Header';
import Button from 'semantic-ui-react/dist/commonjs/elements/Button';

import Logo from '../Logo/Logo';
import Menu from '../Menu/Menu';

import Background from './header-bg.jpg';

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
      <Button primary size="massive" style={{ margin: '0 auto' }}>
        Start Tracking
      </Button>
    </Container>
  </Segment>
);

export default Hero;
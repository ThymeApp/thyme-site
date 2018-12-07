import React from 'react';
import Link from 'gatsby-link';

import Container from 'semantic-ui-react/dist/commonjs/elements/Container';
import Icon from 'semantic-ui-react/dist/commonjs/elements/Icon';
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
      <div className="HeroButtons">
        <Button
          as="a"
          href="/thyme"
          size="massive"
          basic
          inverted
          style={{ margin: '0.5em' }}
        >
          Start Tracking (Free)
        </Button>
        <Button
          as={Link}
          to="/premium"
          color="violet"
          size="massive"
          style={{ margin: '0.5em' }}
        >
          <Icon name="diamond" />
          Get Premium
        </Button>
      </div>
    </Container>
  </Segment>
);

export default Hero;

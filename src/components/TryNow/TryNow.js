import React from 'react';

import Segment from 'semantic-ui-react/dist/commonjs/elements/Segment';
import Header from 'semantic-ui-react/dist/commonjs/elements/Header';
import Button from 'semantic-ui-react/dist/commonjs/elements/Button';
import Container from 'semantic-ui-react/dist/commonjs/elements/Container';

import './TryNow.css';

const TryNow = () => (
  <Segment className="TryNow" vertical inverted color="teal">
    <Container>
      <Header inverted as="h2">Try Thyme, no sign-up required!</Header>
      <Button size="massive" secondary>Get Started</Button>
    </Container>
  </Segment>
);

export default TryNow;
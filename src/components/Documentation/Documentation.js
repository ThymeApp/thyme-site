import React from 'react';
import Link from 'gatsby-link';

import Segment from 'semantic-ui-react/dist/commonjs/elements/Segment';
import Container from 'semantic-ui-react/dist/commonjs/elements/Container';
import Header from 'semantic-ui-react/dist/commonjs/elements/Header';
import Button from 'semantic-ui-react/dist/commonjs/elements/Button';
import Grid from 'semantic-ui-react/dist/commonjs/collections/Grid';
import Menu from 'semantic-ui-react/dist/commonjs/collections/Menu';

import { gettingStarted } from './pages';

import './Documentation.css';

function RenderMenuItems(items, active) {
  return Object.keys(items).map(key => (
    <Menu.Item
      key={key}
      active={active === key}
      as={(props) => (
        <Link
          {...props}
          to={`/documentation/${items[key].href}`}>
          {items[key].title}
        </Link>
      )}
    />
  ))
}

function NavButton(position = 'left', href, title) {
  return (
    <Button
      className="Documentation-Button"
      basic
      icon
      labelPosition={position}
      floated={position}
      as={(props) => (
        <Link {...props} to={`/documentation/${href}`}>
          {position === 'left' && <div className="icon">❮</div>}
          {title}
          {position === 'right' && <div className="icon">❯</div>}
        </Link>
      )}
    >

    </Button>
  );
}

function Documentation({ title, page, prev, next, children }) {
  return (
    <Container className="Documentation">
      <Grid>
        <Grid.Row>
          <Grid.Column width={5}>
            <Menu vertical secondary pointing style={{ margin: '2rem 0' }}>
              <Menu.Item header>Getting started</Menu.Item>
              {RenderMenuItems(gettingStarted, page)}
            </Menu>
          </Grid.Column>
          <Grid.Column width={11} style={{ padding: '2rem' }}>
            <Header as="h2">{title}</Header>

            <Segment vertical>
              {children}
            </Segment>

            {(prev || next) && (
              <Segment vertical>
                {prev && (NavButton('left', prev.href, prev.title))}
                {next && (NavButton('right', next.href, next.title))}
              </Segment>
            )}
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  );
}

export default Documentation;
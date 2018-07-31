import React from 'react';
import Link from 'gatsby-link';

import Container from 'semantic-ui-react/dist/commonjs/elements/Container';
import Segment from 'semantic-ui-react/dist/commonjs/elements/Segment';
import Menu from 'semantic-ui-react/dist/commonjs/collections/Menu';

function MenuLink(props) {
  return (
    <Link {...props}>{props.children}</Link>
  );
}

function Footer() {
  return (
    <Segment inverted vertical style={{ padding: '3em 0em' }}>
      <Container>
        <p style={{ textAlign: 'center' }}>
          for support or questions: <a href="mailto:support@usethyme.com">support@usethyme.com</a>
        </p>
        <Menu inverted secondary>
          <Menu.Menu position="left">
            <Menu.Item>
              © 2018 Thyme<br />
            </Menu.Item>
          </Menu.Menu>
          <Menu.Menu position="right">
            <Menu.Item as={MenuLink} to="/terms-of-use">
              Terms of Use
            </Menu.Item>
            <Menu.Item as={MenuLink} to="/privacy">
              Privacy Policy
            </Menu.Item>
          </Menu.Menu>
        </Menu>
      </Container>
    </Segment>
  );
}

export default Footer;
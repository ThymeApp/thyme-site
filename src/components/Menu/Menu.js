import React, { Component } from 'react';
import Link from 'gatsby-link';

import Container from 'semantic-ui-react/dist/commonjs/elements/Container';
import Menu from 'semantic-ui-react/dist/commonjs/collections/Menu';
import Visibility from 'semantic-ui-react/dist/commonjs/behaviors/Visibility';

import Logo from '../Logo/Logo';

import './Menu.css';

function MenuLink(props) {
  return (
    <Link {...props}>{props.children}</Link>
  );
}

class TopMenu extends Component {
  state = {
    fixed: false,
  };

  hideFixedMenu = () => this.setState({ fixed: false });
  showFixedMenu = () => this.setState({ fixed: true });

  render() {
    const { fixed } = this.state;
    const { forceLogo, page } = this.props;

    return (
      <Visibility
        once={false}
        onBottomPassed={this.showFixedMenu}
        onBottomPassedReverse={this.hideFixedMenu}
      >
        <Menu
          fixed={fixed ? 'top' : null}
          inverted
          pointing={!fixed}
          secondary={!fixed}
          size="large"
          style={{ border: '0' }}
        >
          <Container>
            <Menu.Menu position="left">
              {fixed || forceLogo ? (
                <Menu.Item
                  as={MenuLink}
                  to="/"
                  className="logo"
                >
                  <Logo />
                </Menu.Item>
              ) : null}
              <Menu.Item
                active={page === 'home'}
                as={MenuLink}
                to="/"
              >
                Home
              </Menu.Item>
            </Menu.Menu>
            <Menu.Menu position={fixed ? 'left' : 'right'}>
              <Menu.Item
                active={page === 'documentation'}
                as={MenuLink}
                to="/documentation"
              >
                Documentation
              </Menu.Item>
              <Menu.Item as="a" href="mailto:support@usethyme.com">Support</Menu.Item>
              <Menu.Item as="a" href="https://github.com/Gaya/thyme">Project's Source</Menu.Item>
              <Menu.Item as="a" href="/thyme">Use Thyme</Menu.Item>
            </Menu.Menu>
          </Container>
        </Menu>
      </Visibility>
    );
  }
}
export default TopMenu;
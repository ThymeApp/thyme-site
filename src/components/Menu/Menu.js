import React, { Fragment, Component } from 'react';
import Link from 'gatsby-link';

import Button from 'semantic-ui-react/dist/commonjs/elements/Button';
import Icon from 'semantic-ui-react/dist/commonjs/elements/Icon';
import Container from 'semantic-ui-react/dist/commonjs/elements/Container';
import Menu from 'semantic-ui-react/dist/commonjs/collections/Menu';
import Visibility from 'semantic-ui-react/dist/commonjs/behaviors/Visibility';
import Responsive from 'semantic-ui-react/dist/commonjs/addons/Responsive';
import Sidebar from 'semantic-ui-react/dist/commonjs/modules/Sidebar';

import Logo from '../Logo/Logo';

import './Menu.css';

class TopMenu extends Component {
  state = {
    fixed: false,
    opened: false,
    show: false,
  };

  componentDidMount() {
    // fucked up hack, whatever
    this.setState({ show: true });
  }

  hideFixedMenu = () => this.setState({ fixed: false });
  showFixedMenu = () => this.setState({ fixed: true });

  toggleMenu = () => this.setState({ opened: !this.state.opened });

  render() {
    const { fixed, opened, show } = this.state;
    const { forceLogo, page } = this.props;

    if (!show) {
      return null;
    }

    const secondaryMenuItems = (
      <Fragment>
        <Menu.Item
          active={page === 'documentation'}
          as={Link}
          to="/documentation"
        >
          Documentation
        </Menu.Item>
        <Menu.Item as="a" href="mailto:support@usethyme.com">Contact</Menu.Item>
        <Menu.Item as="a" href="https://github.com/ThymeApp/thyme">View Source</Menu.Item>
        <Button
          basic
          as="a"
          to="/thyme"
          inverted
          className="item"
        >
          Use Thyme
        </Button>
      </Fragment>
    );

    return (
      <Visibility
        once={false}
        onBottomPassed={this.showFixedMenu}
        onBottomPassedReverse={this.hideFixedMenu}
      >
        <Responsive as={Container} minWidth={721}>
          <Menu
            fixed={fixed ? 'top' : null}
            inverted
            pointing={!fixed}
            secondary={!fixed}
            size="large"
            style={{ border: '0' }}
          >
            <Menu.Menu position="left">
              {fixed || forceLogo ? (
                <Menu.Item
                  as={Link}
                  to="/"
                  className="logo"
                >
                  <Logo />
                </Menu.Item>
              ) : null}
              <Menu.Item
                active={page === 'home'}
                as={Link}
                to="/"
              >
                Home
              </Menu.Item>
            </Menu.Menu>
            <Menu.Menu position={fixed ? 'left' : 'right'}>
              {secondaryMenuItems}
            </Menu.Menu>
          </Menu>
        </Responsive>
        <Responsive maxWidth={720}>
          <Menu
            fixed={'top'}
            inverted
            size="large"
            style={{ border: '0' }}
          >
            <Menu.Item>
              <Button icon onClick={this.toggleMenu}>
                <Icon name="bars" />
              </Button>
            </Menu.Item>
          </Menu>
          <Sidebar vertical visible={opened}>
            <Menu inverted vertical secondary pointing>
              <Menu.Item
                active={page === 'home'}
                as={Link}
                to="/"
              >
                Home
              </Menu.Item>
              {secondaryMenuItems}
            </Menu>
          </Sidebar>
        </Responsive>
      </Visibility>
    );
  }
}
export default TopMenu;

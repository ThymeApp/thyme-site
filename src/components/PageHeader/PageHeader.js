import React from 'react';

import Segment from 'semantic-ui-react/dist/commonjs/elements/Segment';

import Menu from '../Menu/Menu';

import './PageHeader.css'

function PageHeader({ page, title }) {
  return (
    <Segment id="PageHeader" vertical inverted color="teal">
      <Menu forceLogo page={page} />
    </Segment>
  );
}

export default PageHeader;

import React from 'react'

import Segment from 'semantic-ui-react/dist/commonjs/elements/Segment';
import Container from 'semantic-ui-react/dist/commonjs/elements/Container';

import Layout from '../components/Layout/layout';

const NotFoundPage = () => (
  <Layout>
    <Segment style={{ padding: '4em 0' }} vertical>
      <Container>
        <h1>NOT FOUND</h1>
        <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
      </Container>
    </Segment>
  </Layout>
)

export default NotFoundPage

import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import 'semantic-ui-css/semantic.min.css';

import Footer from '../components/Footer/Footer';

import './index.css';

const Layout = ({ children, data }) => (
  <div className="Thyme-Site">
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        {
          name: 'description',
          content: 'Thyme is a time tracker which aims to be as simple as possible. The goal is to make logging and tracking easy, not a chore.',
        },
      ]}
    />
    <div style={{ minHeight: 'calc(100vh - 110px)' }}>
      {children()}
    </div>
    <Footer />
  </div>
);

Layout.propTypes = {
  children: PropTypes.func,
};

export default Layout;

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`;

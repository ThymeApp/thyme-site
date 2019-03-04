import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import './layout.css'

import Footer from '../Footer/Footer'

let currentPage = '';

const Layout = ({ children }) => (
  <div className="Thyme-Site">
    <Helmet
      title="Thyme - Dead Simple Time Logger"
      meta={[
        {
          name: 'description',
          content: 'Privacy centric time tracker which aims to be as simple as possible.',
        },
      ]}
      onChangeClientState={(newState) => {
        const _paq = window._paq || [];

        if (currentPage !== newState.title) {
          currentPage = newState.title;
          _paq.push(['trackPageView', newState.title]);
        }
      }}
    >
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
      <meta name="theme-color" content="#000000" />

      <link rel="manifest" href="/manifest.json" />
      <link rel="shortcut icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" sizes="57x57" href="/apple-icon-57x57.png" />
      <link rel="apple-touch-icon" sizes="60x60" href="/apple-icon-60x60.png" />
      <link rel="apple-touch-icon" sizes="72x72" href="/apple-icon-72x72.png" />
      <link rel="apple-touch-icon" sizes="76x76" href="/apple-icon-76x76.png" />
      <link rel="apple-touch-icon" sizes="114x114" href="/apple-icon-114x114.png" />
      <link rel="apple-touch-icon" sizes="120x120" href="/apple-icon-120x120.png" />
      <link rel="apple-touch-icon" sizes="144x144" href="/apple-icon-144x144.png" />
      <link rel="apple-touch-icon" sizes="152x152" href="/apple-icon-152x152.png" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-icon-180x180.png" />
      <link rel="icon" type="image/png" sizes="192x192" href="/android-icon-192x192.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
      <meta name="theme-color" content="#ffffff" />

      <meta property="og:title" content="Thyme" />
      <meta property="og:description" content="Privacy centric time tracker which aims to be as simple as possible" />
      <meta property="og:url" content="https://usethyme.com" />
      <meta property="og:image" content="https://usethyme.com/og-thyme.jpg" />
      <meta name="twitter:card" content="summary_large_image" />
    </Helmet>
    <div style={{ minHeight: 'calc(100vh - 158px)' }}>
      {children}
    </div>
    <Footer />
  </div>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

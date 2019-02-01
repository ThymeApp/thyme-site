import React from 'react';
import Helmet from 'react-helmet';

import Layout from '../../components/Layout/layout';
import PageHeader from '../../components/PageHeader/PageHeader';
import Documentation from '../../components/Documentation/Documentation';
import { gettingStarted, premium } from '../../components/Documentation/pages';

import Header from 'semantic-ui-react/dist/commonjs/elements/Header';
import Image from 'semantic-ui-react/dist/commonjs/elements/Image';

import Image01 from './extensions.jpg';

function DocumentationPage() {
  return (
    <Layout>
      <Helmet
        title="Extensions for Chrome and Firefox - Thyme"
        meta={[
          {
            name: 'description',
            content: 'Thyme Browser integrations: Extensions for Chrome and Firefox',
          },
        ]}
      />
      <PageHeader page="documentation" />
      <Documentation
        title="Browser integrations: Extensions for Chrome and Firefox"
        page="extensions"
        prev={gettingStarted['export-import']}
        next={premium['syncing']}
      >
        <p>
          You can use Thyme from any where in your browser using the browser
          extensions for <a href="https://chrome.google.com/webstore/detail/thyme/folhcadkkopbibfggjpoekbiblicffic">Google Chrome </a>
          and <a href="https://addons.mozilla.org/en-US/firefox/addon/thyme/">Mozilla Firefox</a>.
        </p>

        <p>
          Control Thyme from everywhere in the browser.
          You don't need to have a tab with Thyme focused to track time.
        </p>

        <p>
          <Image src={Image01} />
        </p>

        <p>
          Start, stop, and change current tracking item. Easily add the entry
          from the extension's popup window.
        </p>

        <Header as="h3">Get for Chrome</Header>

        <p>
          <a href="https://chrome.google.com/webstore/detail/thyme/folhcadkkopbibfggjpoekbiblicffic">Download Thyme for Chrome</a>
        </p>

        <Header as="h3">Get for Firefox</Header>
        <p>
          <a href="https://addons.mozilla.org/en-US/firefox/addon/thyme/">Download Thyme for Firefox</a>
        </p>
      </Documentation>
    </Layout>
  );
}

export default DocumentationPage;

import React from 'react';
import Helmet from 'react-helmet';
import { Link } from 'gatsby'

import Layout from '../../components/Layout/layout';
import PageHeader from '../../components/PageHeader/PageHeader';
import Documentation from '../../components/Documentation/Documentation';
import { gettingStarted, premium } from '../../components/Documentation/pages';

import Header from 'semantic-ui-react/dist/commonjs/elements/Header';
import Image from 'semantic-ui-react/dist/commonjs/elements/Image';

import Image01 from './syncing-01.png';

function DocumentationPage() {
  return (
    <Layout>
      <Helmet
        title="Syncing between devices - Thyme"
        meta={[
          {
            name: 'description',
            content: 'Keep your devices in sync with Thyme Capsule.',
          },
        ]}
      />
      <PageHeader page="documentation" />
      <Documentation
        title="Keep your data in sync between devices"
        page="syncing"
        prev={gettingStarted['extensions']}
        next={premium['hourly-rates']}
      >
        <p>
          Syncing data across devices allows you to keep track of your time from
          multiple places. For instance your mobile phone and your computer.
        </p>

        <p>
          This will prevent duplicate content and saves your data across all
          devices.
        </p>

        <p>
          <Link to="/premium">A premium subscription to Thyme</Link> is required
          to sync data to the server.
        </p>

        <Header as="h3">Creating an account</Header>

        <p>
          To start syncing data, use the top right button to log in to Thyme or
          create an account.
        </p>

        <p>
          By registering your data will be synced to our Thyme Capsule service.
          The next time you open Thyme on a device the capsule will check for
          new, deleted, or changed entries.
        </p>

        <p>
          <Image src={Image01} />
        </p>

        <Header as="h3">Syncing data</Header>

        <p>
          Syncing data to the cloud happens automatically. Each time there is a
          change the new data or changes will be saved on the Thyme Capsule
          service.
        </p>

        <p>
          All the data is handled with the most care. The data is saved
          encrypted and secure in the Thyme Capsule.
        </p>
      </Documentation>
    </Layout>
  );
}

export default DocumentationPage;

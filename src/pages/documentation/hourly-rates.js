import React from 'react';
import Helmet from 'react-helmet';

import Header from 'semantic-ui-react/dist/commonjs/elements/Header';
import Image from 'semantic-ui-react/dist/commonjs/elements/Image';

import Layout from '../../components/Layout/layout';
import PageHeader from '../../components/PageHeader/PageHeader';
import Documentation from '../../components/Documentation/Documentation';
import { gettingStarted, premium } from '../../components/Documentation/pages';

import Image01 from '../premium/project-rates.png';
import Image02 from '../premium/reports-price.png';
import Image03 from './hourly-rates-01.png';

function DocumentationPage() {
  return (
    <Layout>
      <Helmet
        title="Hourly rates for projects - Thyme"
        meta={[
          {
            name: 'description',
            content: 'Add hourly rate to projects.',
          },
        ]}
      />
      <PageHeader page="documentation" />
      <Documentation
        title="Hourly rates for projects"
        page="hourly-rates"
        prev={gettingStarted['syncing']}
      >
        <p>
          You can add hourly rates to your projects. This allows you to keep
          of the costs and earnings of a project you're tracking time for.
        </p>

        <p>
          A perfect way to keep track of what you need to invoice your clients!
          Total project pricing will also end up on reports.
        </p>

        <Header as="h3">Setup project rates</Header>

        <p>
          On the <strong>projects</strong> page in Thyme there will be a new
          option to add a price per project.
        </p>

        <p>
          <Image style={{ maxWidth: 300, margin: '3em auto' }} src={Image01} />
        </p>

        <p>
          You can see the total project price on reports now, where the price
          will be calculated according to your hourly rate for the project.
        </p>

        <p>
          <Image style={{ maxWidth: 300, margin: '3em auto' }} src={Image02} />
        </p>

        <Header as="h3">Changing the currency</Header>

        <p>
          By default the currency your hourly rate is displayed in is in EUR. To
          change this go to the <strong>settings page</strong> and go to the
          section called <strong>project rates</strong>.
        </p>

        <p>
          Here you can pick your preferred currency.
        </p>

        <p>
          <Image style={{ maxWidth: 300, margin: '3em auto' }} src={Image03} />
        </p>
      </Documentation>
    </Layout>
  );
}

export default DocumentationPage;

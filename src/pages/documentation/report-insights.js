import React from 'react';
import Helmet from 'react-helmet';

import Image from 'semantic-ui-react/dist/commonjs/elements/Image';

import Layout from '../../components/Layout/layout';
import PageHeader from '../../components/PageHeader/PageHeader';
import Documentation from '../../components/Documentation/Documentation';
import { premium } from '../../components/Documentation/pages';

import Image01 from '../premium/reports-daily-insights.png';

function DocumentationPage() {
  return (
    <Layout>
      <Helmet
        title="Report Insights - Thyme"
        meta={[
          {
            name: 'description',
            content: 'A more detailed look into your reports.',
          },
        ]}
      />
      <PageHeader page="documentation" />
      <Documentation
        title="Report Insights"
        page="report-insights"
        prev={premium['hourly-rates']}
      >
        <p>
          Detailed insights give you a day to day summary of the project you
          spent time working on.
        </p>

        <p>
          This gives a nice overview of where your tracked time is spent on per
          day.
        </p>

        <p>
          <Image style={{ margin: '3em auto' }} src={Image01} />
        </p>
      </Documentation>
    </Layout>
  );
}

export default DocumentationPage;

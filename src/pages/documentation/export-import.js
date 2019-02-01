import React from 'react';
import Helmet from 'react-helmet';

import Header from 'semantic-ui-react/dist/commonjs/elements/Header';

import Layout from '../../components/Layout/layout';
import PageHeader from '../../components/PageHeader/PageHeader';
import Documentation from '../../components/Documentation/Documentation';
import { gettingStarted } from '../../components/Documentation/pages';

function DocumentationPage() {
  return (
    <Layout>
      <Helmet
        title="Exporting and importing data - Thyme"
        meta={[
          {
            name: 'description',
            content: 'Export and import time entry data, projects, and reports to JSON.',
          },
        ]}
      />
      <PageHeader page="documentation" />
      <Documentation
        title="Exporting and importing Thyme data"
        page="export-import"
        prev={gettingStarted['rounding']}
        next={gettingStarted['extensions']}
      >
        <p>
          To keep a backup of your entered data, you can go to the settings page
          and export the data to your hard drive.
        </p>

        <p>
          This will allow you to keep a copy of your data and see what Thyme
          uses to keep track of your time spent on projects.
        </p>

        <Header as="h3">Exporting / saving data</Header>

        <p>
          Choose to "export data" under the <strong>export / import </strong>
          section of the settings page. Your data will automatically be exported
          in a JSON format to your hard drive.
        </p>

        <p>
          If you're a developer, you can
          also use this information to your own advantage!
        </p>

        <Header as="h3">Importing data</Header>

        <p>
          All exported data can also be imported. However, be careful. The data
          which is being imported will <strong>overwrite all current data</strong>.
          So make sure you export before overwriting.
        </p>
      </Documentation>
    </Layout>
  );
}

export default DocumentationPage;

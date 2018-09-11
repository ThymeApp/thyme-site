import React from 'react';
import Helmet from 'react-helmet';

import Layout from '../../components/Layout/layout';
import PageHeader from '../../components/PageHeader/PageHeader';
import Documentation from '../../components/Documentation/Documentation';
import { gettingStarted } from '../../components/Documentation/pages';

import Header from 'semantic-ui-react/dist/commonjs/elements/Header';
import Image from 'semantic-ui-react/dist/commonjs/elements/Image';

import Image01 from './projects-01.png';

function DocumentationPage() {
  return (
    <Layout>
      <Helmet
        title="Projects in Thyme - Thyme"
        meta={[
          {
            name: 'description',
            content: 'Create projects to file your spent time under. Makes creating reports much easier later.',
          },
        ]}
      />
      <PageHeader page="documentation" />
      <Documentation
        title="Projects in Thyme"
        page="projects"
        prev={gettingStarted['tracking-time']}
        next={gettingStarted['reports']}
      >
        <p>
          When working on projects or on projects for clients you might want to
          keep track of the time spent on each one of them. This will make
          figuring out which projects take up a certain amount of time.
        </p>

        <p>
          Thyme allows you to create projects on the projects page. All time
          entries can be assigned to a project you created.
        </p>

        <Header as="h3">
          Adding a new project
        </Header>

        <p>
          To add a new project go to the projects page. You can create
          sub-projects too, for when a project is split into multiple projects.
        </p>

        <p>
          Fill in a project name in the top form and optionally select a parent
          project. Press "Add project" and you're done. All time entries can now
          be filed under this project.
        </p>

        <p>
          <Image src={Image01} />
        </p>

        <Header as="h3">
          Treating projects as a "client"
        </Header>

        <p>
          If you work for multiple clients, you can create them as a "root
          project". Meaning that all projects you'll do for the client will be
          a sub-project of the "client project".
        </p>

        <p>
          This way you can group projects by client and will make creating
          reports easier in the end and will make for a nice grouped detailed
          overview later.
        </p>
      </Documentation>
    </Layout>
  );
}

export default DocumentationPage;

import React from 'react';
import Helmet from 'react-helmet';

import PageHeader from '../../components/PageHeader/PageHeader';
import Documentation from '../../components/Documentation/Documentation';
import { gettingStarted } from '../../components/Documentation/pages';

import Header from 'semantic-ui-react/dist/commonjs/elements/Header';

function DocumentationPage() {
  return (
    <div>
      <Helmet
        title="Documentation - Thyme"
        meta={[
          {
            name: 'description',
            content: 'Introduction page to the Thyme documentation.',
          },
        ]}
      />
      <PageHeader page="documentation" />
      <Documentation
        title="Introduction to Thyme"
        page="introduction"
        next={gettingStarted['tracking-time']}
      >
        <p>
          Thyme is a time tracker which aims to be as simple as possible. The
          goal is to make logging and tracking easy, not a chore.
        </p>

        <p>
          This documentation will guide you through the functionality of Thyme
          and how to make the most out of it.
        </p>

        <Header as="h3">
          Thyme in short
        </Header>

        <p>
          Thyme allows you to track time spent on projects and tasks. Add notes
          and file the entries under a project. Create time reports of the work
          you've done and see how much time you spent on each project.
        </p>

        <p>
          The focus is to make time tracking as easy and private as possible.
          All data is yours and only yours.
        </p>

        {/*<Header as="h3">*/}
          {/*Developers*/}
        {/*</Header>*/}

        {/*<p>*/}
          {/*If you're looking for documentation from a developer's perspective you*/}
          {/*can read the articles in the second part of the documentation.*/}
        {/*</p>*/}
      </Documentation>
    </div>
  );
}

export default DocumentationPage;
import React from 'react';
import Helmet from 'react-helmet';

import Header from 'semantic-ui-react/dist/commonjs/elements/Header';
import Image from 'semantic-ui-react/dist/commonjs/elements/Image';

import Layout from '../../components/Layout/layout';
import PageHeader from '../../components/PageHeader/PageHeader';
import Documentation from '../../components/Documentation/Documentation';
import { gettingStarted } from '../../components/Documentation/pages';

import Image01 from './reports-01.png';
import Image02 from './reports-02.png';

function DocumentationPage() {
  return (
    <Layout>
      <Helmet
        title="Creating reports - Thyme"
        meta={[
          {
            name: 'description',
            content: 'Reports allow you to create reports of time spent on projects over a period of time.',
          },
        ]}
      />
      <PageHeader page="documentation" />
      <Documentation
        title="Creating reports"
        page="reports"
        prev={gettingStarted['projects']}
        next={gettingStarted['rounding']}
      >
        <p>
          Reports in Thyme allow you to get insights in what projects you spent
          time on and what the total time spent is.
        </p>

        <p>
          When you need to create a report for a client or want to get insights
          about time spent for yourself, here you can retrieve this information.
        </p>

        <Header as="h3">Creating a report</Header>

        <p>
          Creating a report consists of two filters: the date range and the
          projects.
        </p>

        <p>
          With <strong>date range</strong> you tell Thyme which range of dates
          the tracked time has to be in in order to count as time spent on a
          project.
        </p>

        <p>
          By toggling projects in the <strong>filter project</strong> section
          you can filter out projects you don't want to show up in your reports.
          for instance: clients you don't want to add in the report.
        </p>

        <p>
          <Image src={Image01} />
        </p>

        <p>
          Use the buttons next to the date select fields to quickly set the date
          range to today, this week, week to date, or last month.
        </p>

        <Header as="h3">Detailed report insights</Header>

        <p>
          When you toggle the <strong>detailed view</strong> at the bottom of
          the project time table, you get a more detailed view of the entries
          belonging to the report.
        </p>

        <p>
          Here you can read the notes on the time entry and see the date, start
          and end times.
        </p>

        <Header as="h3">Storing a report</Header>

        <p>
          You can store the current report you're looking at using the "save"
          button in the top right bar of icons.
        </p>

        <p>
          You can open up created reports for later inspection. Great to keep
          track of monthly hour reports for clients you're billing.
        </p>

        <p>
          To open a report click the "open" button in the top right menu.
        </p>

        <Header as="h3">Saving to PDF</Header>

        <p>
          You can export the current report you're viewing to a PDF file by
          pressing the "download" button on the top right of the reports screen.
        </p>

        <p>
          Add this PDF to your invoices to share your worked time with your
          clients.
        </p>

        <p>
          This will generate a PDF file with the chart and time spent table. If
          you enabled the
          <strong> detailed view</strong> it will also show up in the PDF.
        </p>

        <p>
          <Image src={Image02} />
        </p>

        <Header as="h3">Printing the Report</Header>

        <p>
          The far right button in the top bar of the reports page can be used
          to print the page. Also to save the printed version of the page to a
          PDF file in most browsers.
        </p>

        <p>
          Thyme reports page has been optimized for this feature and will only
          print vital information for your clients to the PDF. You can also add
          the more detailed time entries by toggling the
          <strong> detailed view</strong> before printing.
        </p>
      </Documentation>
    </Layout>
  );
}

export default DocumentationPage;

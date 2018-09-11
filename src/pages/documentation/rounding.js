import React from 'react';
import Helmet from 'react-helmet';

import PageHeader from '../../components/PageHeader/PageHeader';
import Documentation from '../../components/Documentation/Documentation';
import { gettingStarted } from '../../components/Documentation/pages';

import Header from 'semantic-ui-react/dist/commonjs/elements/Header';
import Image from 'semantic-ui-react/dist/commonjs/elements/Image';

import Image01 from './rounding-01.png';

function DocumentationPage() {
  return (
    <div>
      <Helmet
        title="Rounding duration of time - Thyme"
        meta={[
          {
            name: 'description',
            content: 'Create projects to file your spent time under. Makes creating reports much easier later.',
          },
        ]}
      />
      <PageHeader page="documentation" />
      <Documentation
        title="Rounding duration of time"
        page="rounding"
        prev={gettingStarted['reports']}
        next={gettingStarted['export-import']}
      >
        <p>
          When you're tracking time, the start and end time don't make for
          nicely rounded times most of the time. Some times you want to round
          to increments of 10 minutes for instance.
        </p>

        <p>
          You can enable automatic rounding of durations in Thyme. This can
          apply to only the report totals or every item you created. Rounding
          will not adjust the actual entered time entry.
        </p>

        <Header as="h3">
          Setting up rounding
        </Header>

        <p>
          When you go to the "settings" page of Thyme, you'll see a section
          called "Duration time rounding".
        </p>

        <p>
          First you select the method of rounding. Choose "disable" to not round
          anything. "Nearest" for when to want to round to the nearest increment
          of your chosen amount of minutes. "Up" for always rounding up, and
          "down" for always rounding down.
        </p>

        <p>
          You can fill in any number in the duration rounding field. So if you
          want to round time to every 6, it is totally possible.
        </p>

        <p>
          <Image src={Image01} />
        </p>

        <Header as="h3">
          Duration rounding
        </Header>

        <p>
          Duration rounding stands for the amount of minutes you want the time
          to be rounded on.
        </p>

        <p>
          If you pick 10 minutes for instance. All durations will be rounded to
          every 10 minutes from the starting time. Perfect for when clients want
          you to book time in these increments.
        </p>

        <Header as="h3">
          Round durations by
        </Header>

        <p>
          You have the choice of either rounding per individual time entry or by
          report totals.
        </p>

        <p>
          If you pick "individual entries" all entries will get a rounded
          duration. Also on your detailed reports.
        </p>

        <p>
          If you pick "report totals" all entry's durations will be counted
          without rounding. The total duration of a project will be rounded in
          the project's "total spent" column.
        </p>
      </Documentation>
    </div>
  );
}

export default DocumentationPage;

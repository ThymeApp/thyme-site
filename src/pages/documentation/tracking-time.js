import React from 'react';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';

import Header from 'semantic-ui-react/dist/commonjs/elements/Header';
import Image from 'semantic-ui-react/dist/commonjs/elements/Image';

import PageHeader from '../../components/PageHeader/PageHeader';
import Documentation from '../../components/Documentation/Documentation';
import { gettingStarted } from '../../components/Documentation/pages';

import Image01 from './tracking-time-01.png';

function DocumentationPage() {
  return (
    <div>
      <Helmet
        title="Tracking and logging time - Thyme"
        meta={[
          {
            name: 'description',
            content: 'Documentation on how to track and log time using Thyme.',
          },
        ]}
      />
      <PageHeader page="documentation" />
      <Documentation
        title="Tracking and logging time"
        page="tracking-time"
        prev={gettingStarted['introduction']}
        next={gettingStarted['projects']}
      >
        <p>
          Thyme allows you to track time spent on tasks. The goal is to keep a
          list of things you worked on or spent doing and how long that task
          took to complete.
        </p>

        <p>
          You can also use Thyme to track the amount of time you spend working
          for your clients. It's all about keeping a logbook of time you want to
          remember later.
        </p>

        <Header as="h3">
          How to add time to your timesheet
        </Header>

        <p>
          Adding time to your log has been designed to be as simple as possible.
          You can select the date of when the task was done, select a start and
          end time. Add a note description to remind yourself what you spent
          that time on and hit the big "plus" button.
        </p>

        <p>
          <Image src={Image01} />
        </p>

        <p>
          You can also press the big "play" button to start tracking your time.
          The date and start time will be set to right now. The end date is
          automatically updated as time passes.
        </p>

        <p>
          When you are ready, press the big "plus" button to add this tracked
          time to your time log.
        </p>

        <Header as="h3">
          The timer is remembered even when you close Thyme
        </Header>

        <p>
          To prevent loosing progress, Thyme automatically remembers if you have
          a timer running were you to close Thyme before adding the entry to
          your log. Next time you open up Thyme you'll see the timer is still
          running.
        </p>

        <p>
          So it's safe to close Thyme when you're working on your tasks. It does
          not matter if you power down your computer. The time you started the
          last timer will be remembered and picked up when you use Thyme again.
        </p>

        <Header as="h3">
          File time entry under a project
        </Header>

        <p>
          Thyme allows you to file time under a project. Do so by selecting a
          project from the projects list in the time adding row.
        </p>

        <p>
          You can read more about projects on the <Link to="/documentation/projects">projects documentation page.</Link>
        </p>

        <p>
          If your project is not yet in the list, you can "quick add" it through
          this same selection list.
        </p>

        <p>
          You'll be able to filter out and create project reports based on where
          you filed your time under. You can also choose to don't put time under
          a project and it will be available later as "no project".
        </p>
      </Documentation>
    </div>
  );
}

export default DocumentationPage;
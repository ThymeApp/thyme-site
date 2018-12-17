import React from 'react';

import Segment from 'semantic-ui-react/dist/commonjs/elements/Segment';
import Container from 'semantic-ui-react/dist/commonjs/elements/Container';
import Header from 'semantic-ui-react/dist/commonjs/elements/Header';
import Image from 'semantic-ui-react/dist/commonjs/elements/Image';
import Button from 'semantic-ui-react/dist/commonjs/elements/Button';
import Grid from 'semantic-ui-react/dist/commonjs/collections/Grid';

import Layout from '../components/Layout/layout';
import Hero from '../components/Hero/Hero';
import TryNow from '../components/TryNow/TryNow';

import Timesheets from '../assets/screenshot_timesheets.png';
import Reports from '../assets/screenshot_reports.png';
import Sync from '../assets/sync.svg';
import StopWatch from '../assets/stopwatch-solid.svg';
import PieChart from '../assets/chart-pie-solid.svg';
import UserSecret from '../assets/user-secret-solid.svg';

const IndexPage = () => (
  <Layout>
    <div className="Home Bigger">
      <Hero />
      <Segment style={{ padding: '4em 0em' }} className="cta" vertical>
        <Grid container stackable columns={3} verticalAlign='top'>
          <Grid.Row>
            <Grid.Column style={{ padding: '0 3rem' }}>
              <Header as="h3">
                <StopWatch />
                Keep Your Time
              </Header>
              <p>
                Keeping track of time you spend working on your projects. This is
                what Thyme is good at.
              </p>
              <p>
                Log how much time you spent on a task, perfect for logging hours
                and billing clients.
              </p>
            </Grid.Column>
            <Grid.Column style={{ padding: '0 3rem' }}>
              <Header as="h3">
                <UserSecret />
                Privacy First
              </Header>
              <p>
                Thyme values your privacy. Every feature is developed with privacy
                at the top of the list.
              </p>
              <p>
                All the data you enter is yours, and yours alone by default.
              </p>
            </Grid.Column>
            <Grid.Column style={{ padding: '0 3rem' }}>
              <Header as="h3">
                <PieChart />
                Reporting
              </Header>
              <p>
                Create and export reports of your entered hours for your archive
                and getting insights in the hours for spent during the week.
              </p>
              <p>
                Reports can be saved as PDF files for backups or as quick reports
                to attach to your invoices to clients.
              </p>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
      <Segment style={{ padding: '8em 0em' }} vertical>
        <Container text>
          <Header as="h2">
            Privacy Centric Time Tracking
          </Header>
          <p>
            You don't need other people (and companies) looking over your shoulder
            when keeping your time. With Thyme you control and keep your
            own data right in your browser.
          </p>
        </Container>

        <Container>
          <Image
            src={Timesheets}
            alt=""
            style={{ marginTop: '6em' }}
          />
        </Container>
      </Segment>
      <Segment style={{ padding: '8em 0em' }} vertical secondary>
        <Grid container stackable verticalAlign='middle'>
          <Grid.Row>
            <Grid.Column width={6}>
              <Header as="h3">
                Create and Save Reports
              </Header>
              <p>
                When it's time to bill your customers, or when you want to see a
                quick overview of the time you spent on a specific project, you
                can create a report with the time you already logged.
              </p>
              <p>
                This includes a more detailed version with your notes. Reports can
                be easily exported to PDF or printed.
              </p>
            </Grid.Column>
            <Grid.Column floated="right" width={8}>
              <Image
                bordered
                rounded
                src={Reports}
              />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
      <Segment style={{ padding: '8em 0em' }} vertical>
        <Container text>
          <Header as="h3">
            Transparent and Open-Source
          </Header>
          <p>
            To keep Thyme as transparent as possible, it is maintained as an open
            source projected where anybody can suggest improvements and help out.
          </p>
          <a href="https://github.com/ThymeApp/thyme"><Button size="big">Visit on GitHub</Button></a>
        </Container>
      </Segment>
      <Segment style={{ padding: '8em 0em' }} vertical secondary>
        <Grid container stackable verticalAlign='middle'>
          <Grid.Row>
            <Grid.Column width={6}>
              <Sync
                style={{ transform: 'rotate(5deg)' }}
                alt="Sync by Kirill Ulitin from the Noun Project"
              />
            </Grid.Column>
            <Grid.Column floated="right" width={8}>
              <Header as="h3">
                Sync Over Multiple Devices
              </Header>
              <p>
                Thyme uses a service called the Thyme-Capsule where you can create
                an account and sync your data securely with our cloud server.
              </p>
              <p>
                When you log in on another device your data will be synced across
                all devices and stored safely.
              </p>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
      <TryNow />
    </div>
  </Layout>
);

export default IndexPage;

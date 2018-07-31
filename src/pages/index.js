import React from 'react';

import Segment from 'semantic-ui-react/dist/commonjs/elements/Segment';
import Container from 'semantic-ui-react/dist/commonjs/elements/Container';
import Header from 'semantic-ui-react/dist/commonjs/elements/Header';
import Image from 'semantic-ui-react/dist/commonjs/elements/Image';
import Button from 'semantic-ui-react/dist/commonjs/elements/Button';
import Grid from 'semantic-ui-react/dist/commonjs/collections/Grid';

import Hero from '../components/Hero/Hero';
import TryNow from '../components/TryNow/TryNow';

import Timesheets from '../assets/screenshot_timesheets.png';
import Reports from '../assets/screenshot_reports.png';
import Sync from '../assets/sync.svg';

const IndexPage = () => (
  <div className="Home">
    <Hero />
    <Segment style={{ padding: '8em 0em' }} vertical>
      <Container text>
        <Header as="h2">
          Privacy Centred Time Tracking
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
        <a href="https://github.com/Gaya/thyme"><Button size="big">Visit on GitHub</Button></a>
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
);

export default IndexPage;

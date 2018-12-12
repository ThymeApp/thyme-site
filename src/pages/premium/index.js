// @flow

import React, { Component } from 'react';

import Segment from 'semantic-ui-react/dist/commonjs/elements/Segment/Segment';
import Header from 'semantic-ui-react/dist/commonjs/elements/Header';
import Button from 'semantic-ui-react/dist/commonjs/elements/Button';
import Icon from 'semantic-ui-react/dist/commonjs/elements/Icon';
import Container from 'semantic-ui-react/dist/commonjs/elements/Container/Container';
import Grid from 'semantic-ui-react/dist/commonjs/collections/Grid/Grid'
import List from 'semantic-ui-react/dist/commonjs/elements/List'
import Image from 'semantic-ui-react/dist/commonjs/elements/Image/Image'
import Card from 'semantic-ui-react/dist/commonjs/views/Card'
import Responsive from 'semantic-ui-react/dist/commonjs/addons/Responsive';

import Layout from '../../components/Layout/layout';
import PageHeader from '../../components/PageHeader/PageHeader';

import Reports from './reports-01.png'
import ReportRates from './reports-price.png'
import ProjectRates from './project-rates.png'
import DailyInsights from './reports-daily-insights.png'

import './Premium.css';
import Sync from '../../assets/sync.svg'

class Premium extends Component {
  state = {
    show: false,
  };

  componentDidMount() {
    this.setState({ show: true });
  }

  render() {
    if (!this.state.show) {
      return null;
    }

    return (
      <Layout>
        <PageHeader page="premium" />
        <div className="Bigger">
          <Segment style={{ padding: '4em 0em' }} className="cta" vertical>
            <Container text>
              <Header as="h1" style={{ marginBottom: '3rem' }}>
                Get Thyme's Premium Features
              </Header>
              <p>
                Apart from all the standard features in Thyme you'll get
                powerful new abilities to supercharge your time tracking.
              </p>
            </Container>
            <Grid container stackable verticalAlign='middle' style={{ margin: '3em 0' }}>
              <Grid.Row>
                <Responsive
                  minWidth={753}
                  as={Grid.Column}
                  width={8}
                >
                  <Image src={Reports} />
                </Responsive>
                <Grid.Column floated="right" width={5}>
                  <Card fluid>
                    <Card.Content>
                      <Card.Header>
                        Premium Subscription
                      </Card.Header>
                    </Card.Content>
                    <Card.Content>
                      <Card.Description>
                        <div className="Price">
                          <span style={{ fontSize: '4em' }}>€10</span>
                          <span>/month</span>
                        </div>
                      </Card.Description>
                      <Card.Description>
                        <h4>Includes premium features:</h4>
                        <List bulleted>
                          <List.Item>Unlimited Backups</List.Item>
                          <List.Item>Hourly project rates</List.Item>
                          <List.Item>Daily insights</List.Item>
                          <List.Item>Pricing reports</List.Item>
                          <List.Item>More to come</List.Item>
                        </List>
                      </Card.Description>
                    </Card.Content>
                    <Card.Content>
                      <Button
                        fluid
                        primary
                        size="big"
                        as="a"
                        href="/thyme/premium"
                      >
                        <Icon name="cart" />
                        Buy Subscription
                      </Button>
                    </Card.Content>
                  </Card>
                </Grid.Column>
                <Responsive
                  maxWidth={752}
                  as={Grid.Column}
                  width={8}
                >
                  <Image src={Reports} />
                </Responsive>
              </Grid.Row>
            </Grid>
          </Segment>
          <Segment style={{ padding: '8em 0em' }} vertical secondary>
            <Header style={{ textAlign: 'center', marginBottom: '2em' }} as="h2">
              What's included in the subscription?
            </Header>

            <Grid container stackable verticalAlign='middle'>
              <Grid.Row>
                <Grid.Column width={5}>
                  <Sync
                    style={{ transform: 'rotate(5deg)' }}
                    alt="Sync by Kirill Ulitin from the Noun Project"
                  />
                </Grid.Column>
                <Grid.Column floated="right" width={8}>
                  <Header as="h3">
                    Unlimited Backups and Syncing
                  </Header>
                  <p>
                    Without a premium subscription your data gets backed up and
                    synced only for the last four weeks.
                  </p>
                  <p>
                    Get a subscription and you will have unlimited backups no
                    matter how old the entered data is.
                  </p>
                </Grid.Column>
              </Grid.Row>
            </Grid>

            <Grid container stackable verticalAlign='middle'>
              <Grid.Row>
                <Grid.Column width={8}>
                  <Header as="h3">
                    Add Hourly Rates to Projects
                  </Header>
                  <p>
                    You're already keeping time you spent on projects, add an
                    hourly rate and you'll <strong>see what you earned</strong>
                    {' '} on projects in a blink of the eye.
                  </p>
                </Grid.Column>
                <Grid.Column floated="right" width={6}>
                  <Image
                    bordered
                    rounded
                    centered
                    style={{ padding: '1em', background: '#fff', maxWidth: 400, width: '100%' }}
                    src={ProjectRates}
                  />
                </Grid.Column>
              </Grid.Row>
            </Grid>

            <Grid container stackable verticalAlign='middle'>
              <Grid.Row>
                <Responsive
                  minWidth={753}
                  as={Grid.Column}
                  width={6}
                >
                  <Image
                    bordered
                    rounded
                    style={{ padding: '1em', background: '#fff', maxWidth: 400, width: '100%' }}
                    src={ReportRates}
                  />
                </Responsive>
                <Grid.Column floated="right" width={8}>
                  <Header as="h3">
                    Total Price of Projects on Reports
                  </Header>
                  <p>
                    Perfect for when it's time to bill the client and you need
                    to have an overview of what to charge.
                  </p>
                  <p>
                    <strong>Creating invoices will be a lot easier.</strong> Your reports
                    now also list the total price of the project of the selected date range.
                  </p>
                </Grid.Column>
                <Responsive
                  maxWidth={752}
                  as={Grid.Column}
                  width={6}
                >
                  <Image
                    bordered
                    rounded
                    centered
                    style={{ padding: '1em', background: '#fff', maxWidth: 400, width: '100%' }}
                    src={ReportRates}
                  />
                </Responsive>
              </Grid.Row>
            </Grid>

            <Grid container stackable verticalAlign='middle'>
              <Grid.Row>
                <Grid.Column width={6}>
                  <Header as="h3">
                    Daily Insights
                  </Header>
                  <p>
                    Added to the reports page is a graph with daily logged insights. This gives you a good
                    idea of where your time is spent, and what it's spent on.
                  </p>
                  <p>
                    Analyse where your hours working are spent on doing and get a grip on your time.
                  </p>
                </Grid.Column>
                <Grid.Column floated="right" width={8}>
                  <Image
                    bordered
                    rounded
                    style={{ padding: '1em', background: '#fff', width: '100%'}}
                    src={DailyInsights}
                  />
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Segment>
          <Segment style={{ padding: '4em 0em' }} vertical inverted color="blue">
            <Container text style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <Header as="h2" style={{ color: '#fff', margin: 0 }}>Want to go premium?</Header>
              <Button
                secondary
                size="big"
                as="a"
                href="/thyme/premium"
              >
                <Icon name="cart" />
                Buy Subscription
              </Button>
            </Container>
          </Segment>
        </div>
      </Layout>
    );
  }
}

export default Premium;

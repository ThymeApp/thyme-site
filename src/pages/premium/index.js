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

import Layout from '../../components/Layout/layout';
import PageHeader from '../../components/PageHeader/PageHeader';

import Reports from './reports-01.png'
import ReportRates from './reports-price.png'
import ProjectRates from './project-rates.png'
import DailyInsights from './reports-daily-insights.png'

class Premium extends Component {
  render() {
    return (
      <Layout>
        <PageHeader page="premium" />
        <div className="Bigger">
          <Segment style={{ padding: '4em 0em' }} className="cta" vertical>
            <Container text>
              <Header as="h1" style={{ marginBottom: '3rem', flexDirection: 'row' }}>
                Get Thyme's Premium Features
                <Icon style={{ marginLeft: 15 }} name="diamond" />
              </Header>
              <p>
                Apart from all the standard features in Thyme you'll get
                powerful new abilities to supercharge your time tracking.
              </p>
            </Container>
            <Grid container stackable verticalAlign='middle' style={{ margin: '3em 0' }}>
              <Grid.Row>
                <Grid.Column width={8}>
                  <Image src={Reports} />
                </Grid.Column>
                <Grid.Column floated="right" width={6}>
                  <Card>
                    <Card.Content>
                      <Card.Header>
                        Premium Subscription
                      </Card.Header>
                    </Card.Content>
                    <Card.Content>
                      <Card.Description>
                        <div className="Price" style={{ margin: '1em 0' }}>
                          <span style={{ fontSize: '4em' }}>€10</span>
                          <span>/month</span>
                        </div>
                      </Card.Description>
                      <Card.Description>
                        <h4>Includes premium features:</h4>
                        <List bulleted>
                          <List.Item>Hourly project rates</List.Item>
                          <List.Item>Daily insights</List.Item>
                          <List.Item>Pricing reports</List.Item>
                        </List>
                      </Card.Description>
                    </Card.Content>
                    <Card.Content>
                      <Button fluid primary size="big">
                        <Icon name="cart" />
                        Buy Subscription
                      </Button>
                    </Card.Content>
                  </Card>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Segment>
          <Segment style={{ padding: '8em 0em' }} vertical secondary>
            <Header style={{ textAlign: 'center', marginBottom: '2em' }} as="h2">
              What's included in the subscription?
            </Header>

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
                    style={{ padding: '1em', background: '#fff', maxWidth: 400, width: '100%' }}
                    src={ProjectRates}
                  />
                </Grid.Column>
              </Grid.Row>
            </Grid>

            <Grid container stackable verticalAlign='middle'>
              <Grid.Row>
                <Grid.Column width={6}>
                  <Image
                    bordered
                    rounded
                    style={{ padding: '1em', background: '#fff', maxWidth: 400, width: '100%' }}
                    src={ReportRates}
                  />
                </Grid.Column>
                <Grid.Column floated="right" width={8}>
                  <Header as="h3">
                    Total Price of Projects on Reports
                  </Header>
                  <p>
                    Perfect for when it's time to bill the client and you need
                    to have an overview of what to charge.
                  </p>
                  <p>
                    <strong>Creating invoices will be a lot easier.</strong>
                  </p>
                </Grid.Column>
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
          <Segment style={{ padding: '3em 0em' }} vertical inverted color="blue">
            <Container text style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <Header as="h2" style={{ color: '#fff', margin: 0 }}>Want to go premium?</Header>
              <Button secondary size="big">
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

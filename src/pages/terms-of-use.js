import React from 'react';
import Helmet from 'react-helmet'

import Segment from 'semantic-ui-react/dist/commonjs/elements/Segment';
import Container from 'semantic-ui-react/dist/commonjs/elements/Container';
import Header from 'semantic-ui-react/dist/commonjs/elements/Header';

import TryNow from '../components/TryNow/TryNow';
import PageHeader from '../components/PageHeader/PageHeader';

const Terms = () => (
  <div className="Terms">
    <Helmet
      title="Terms of Use - Thyme"
      meta={[
        {
          name: 'description',
          content: 'Terms of Use of Thyme.',
        },
      ]}
    />
    <PageHeader />
    <Segment style={{ padding: '4em 0em' }} vertical>
      <Container text>
        <Header as="h1">Terms of Use ("Terms")</Header>

        <p>Last updated: July 31, 2018</p>


        <p>Please read these Terms of Use ("Terms", "Terms of Use") carefully before using the https://www.usethyme.com website (the "Service") operated by Thyme ("us", "we", or "our").</p>

        <p>Your access to and use of the Service is conditioned on your acceptance of and compliance with these Terms. These Terms apply to all visitors, users and others who access or use the Service.</p>

        <p>By accessing or using the Service you agree to be bound by these Terms. If you disagree with any part of the terms then you may not access the Service.</p>

        <h2>Accounts</h2>

        <p>When you create an account with us, you must provide us information that is accurate, complete, and current at all times. Failure to do so constitutes a breach of the Terms, which may result in immediate termination of your account on our Service.</p>

        <p>You are responsible for safeguarding the password that you use to access the Service and for any activities or actions under your password, whether your password is with our Service or a third-party service.</p>

        <p>You agree not to disclose your password to any third party. You must notify us immediately upon becoming aware of any breach of security or unauthorized use of your account.</p>

        <h2>Governing Law</h2>

        <p>These Terms shall be governed and construed in accordance with the laws of Netherlands, without regard to its conflict of law provisions.</p>

        <p>Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights. If any provision of these Terms is held to be invalid or unenforceable by a court, the remaining provisions of these Terms will remain in effect. These Terms constitute the entire agreement between us regarding our Service, and supersede and replace any prior agreements we might have between us regarding the Service.</p>

        <h2>Changes</h2>

        <p>We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material we will try to provide at least 30 days notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.</p>

        <p>By continuing to access or use our Service after those revisions become effective, you agree to be bound by the revised terms. If you do not agree to the new terms, please stop using the Service.</p>


        <h2>Contact Us</h2>

        <p>If you have any questions about these Terms, please contact us by sending an email to support@usethyme.com</p>
      </Container>
    </Segment>
    <TryNow />
  </div>
);

export default Terms;

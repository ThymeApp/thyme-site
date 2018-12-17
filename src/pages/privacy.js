import React from 'react';
import Helmet from 'react-helmet'

import Segment from 'semantic-ui-react/dist/commonjs/elements/Segment';
import Container from 'semantic-ui-react/dist/commonjs/elements/Container';
import Header from 'semantic-ui-react/dist/commonjs/elements/Header';

import Layout from '../components/Layout/layout';
import TryNow from '../components/TryNow/TryNow';
import PageHeader from '../components/PageHeader/PageHeader';

const Privacy = () => (
  <Layout>
    <div className="Terms">
      <Helmet
        title="Privacy Policy - Thyme"
        meta={[
          {
            name: 'description',
            content: 'Privacy Policy of Thyme.',
          },
        ]}
      />
      <PageHeader />
      <Segment style={{ padding: '4em 0em' }} vertical>
        <Container text>
          <Header as="h1">Privacy Policy</Header>

          <p>Effective date: December 14, 2018</p>

          <p>Thyme ("us", "we", or "our") operates the https://usethyme.com website (the "Service").</p>

          <p>This page informs you of our policies regarding the collection, use, and disclosure of personal data when you use our Service and the choices you have associated with that data.</p>

          <p>We use your data to provide and improve the Service. By using the Service, you agree to the collection and use of information in accordance with this policy. Unless otherwise defined in this Privacy Policy, terms used in this Privacy Policy have the same meanings as in our Terms and Conditions, accessible from https://usethyme.com</p>

          <h2>Information Collection And Use</h2>

          <p>We collect several different types of information for various purposes to provide and improve our Service to you.</p>

          <h3>Types of Data Collected</h3>

          <h4>Personal Data</h4>

          <p>You can use Thyme without signing up, this will prevent Thyme from handling your personal data.</p>

          <p>While using our Service, we may ask you to provide us with certain personally identifiable information that can be used to contact or identify you ("Personal Data"). Personally identifiable information may include, but is not limited to:</p>

          <ul>
            <li>Email address</li>
          </ul>

          <p>For tax reasons the following data is also gathered when signing up for Thyme's paid services:</p>

          <ul>
            <li>First and last name</li>
            <li>Address</li>
            <li>Postal code</li>
            <li>City of residence</li>
            <li>Country of residence</li>
          </ul>

          <h2>Data sharing</h2>

          <p>Thyme will not share your data with any 3th party.</p>

          <h2>Data storage</h2>

          <p>Your personal data is stored in a MariaDB database. Your timesheet backups are stored on disk using encrypted text files. These files are encrypted to prevent 3th party interference.</p>

          <h2>Data removal</h2>

          <p>Should you want to stop using the Thyme Capsule service. Send support@usethyme.com an email and your data will be removed from our servers.</p>

          <h2>Use of Data</h2>

          <p>Thyme uses the collected data for various purposes:</p>
          <ul>
            <li>To provide and maintain the Service</li>
            <li>To notify you about changes to our Service</li>
            <li>To allow you to participate in interactive features of our Service when you choose to do so</li>
            <li>To provide customer care and support</li>
            <li>To monitor the usage of the Service</li>
            <li>To detect, prevent and address technical issues</li>
          </ul>

          <h2>Transfer Of Data</h2>
          <p>Your information, including Personal Data, may be transferred to — and maintained on — computers located outside of your state, province, country or other governmental jurisdiction where the data protection laws may differ than those from your jurisdiction.</p>
          <p>If you are located outside Netherlands and choose to provide information to us, please note that we transfer the data, including Personal Data, to Netherlands and process it there.</p>
          <p>Your consent to this Privacy Policy followed by your submission of such information represents your agreement to that transfer.</p>
          <p>Thyme will take all steps reasonably necessary to ensure that your data is treated securely and in accordance with this Privacy Policy and no transfer of your Personal Data will take place to an organization or a country unless there are adequate controls in place including the security of your data and other personal information.</p>

          <h2>Disclosure Of Data</h2>

          <h3>Legal Requirements</h3>
          <p>Thyme may disclose your Personal Data in the good faith belief that such action is necessary to:</p>
          <ul>
            <li>To comply with a legal obligation</li>
            <li>To protect and defend the rights or property of Thyme</li>
            <li>To prevent or investigate possible wrongdoing in connection with the Service</li>
            <li>To protect the personal safety of users of the Service or the public</li>
            <li>To protect against legal liability</li>
          </ul>

          <h2>Security Of Data</h2>
          <p>The security of your data is important to us, but remember that no method of transmission over the Internet, or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your Personal Data, we cannot guarantee its absolute security.</p>

          <h2>Changes To This Privacy Policy</h2>
          <p>We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.</p>
          <p>We will let you know via email and/or a prominent notice on our Service, prior to the change becoming effective and update the "effective date" at the top of this Privacy Policy.</p>
          <p>You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.</p>

          <h2>Contact Us</h2>
          <p>If you have any questions about this Privacy Policy, please contact us by email: support@usethyme.com</p>
        </Container>
      </Segment>
      <TryNow />
    </div>
  </Layout>
);

export default Privacy;

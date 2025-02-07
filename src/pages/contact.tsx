import * as React from 'react'
import Layout from '../components/layout'

const ContactPage: React.FC = () => (
  <Layout title={'contact page'} children={undefined} />
);

export const Head = () => (
  <>
    <title>Contact</title>
    <meta name="description" content="This page shows how to contact us." />
  </>
)

export default ContactPage;
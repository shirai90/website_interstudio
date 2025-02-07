import * as React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'

const pageStyles: React.CSSProperties = {
  minHeight: '100vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '1rem',
};

const layoutStyles: React.CSSProperties = {
  display: 'flex',
  gap: '3rem',
  maxWidth: '1200px',
  alignItems: 'center',
  textAlign: 'center',
};

const contentStyles: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column' as const,
  gap: '1rem',
  position: 'relative',
  height: '300px',
};

const linkStyles: React.CSSProperties = {
  marginTop: '3rem',
  color: 'rgb(123,53,205)',
  textAlign: 'center',
  fontWeight: 'bold',
};

const NotFoundPage: React.FC = () => (
  <Layout title={'404 page'} >
    <main style={pageStyles}>
      <div style={layoutStyles}>
        <div style={contentStyles}>
          <h1 style={{ fontSize: '3rem', margin: 0 }}>404</h1>
          <p style={{ fontSize: '1.2rem' }}>
            哎呀，你来到了未知领域...
          </p>
          <Link to="/" style={linkStyles}>
            返回首页 →
          </Link>
        </div>
      </div>
    </main>
  </Layout>
);

export const Head = () => (
  <>
    <title>404</title>
    <meta name="description" content="This page is not found." />
  </>
);

export default NotFoundPage;
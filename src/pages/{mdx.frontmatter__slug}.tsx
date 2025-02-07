import * as React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import { MDXProvider } from '@mdx-js/react';
import MDXNavigation from '../components/mdx-navigation';
import AboutImageLayout from '../components/about-section';
import * as styles from '../styles/modules/about-section.module.scss';
import * as mdxContentStyles from '../styles/modules/mdx-content.module.scss';

interface MDXPageProps {
  children: React.ReactNode;
  data: {
    mdx: {
      tableOfContents: {
        items: Array<{
          url: string;
          title: string;
        }>;
      };
    };
  };
}

const components = {
  AboutImageLayout,
  h1: ({ children, ...props }: any) => {
    const titleText = typeof children === 'string' ? children : children?.toString() || '';
    const id = titleText
      .replace(/[^\w\u4e00-\u9fa5]/g, '')
      .trim();
    
    return (
      <h1 
        id={id}
        className={styles.h1} 
        {...props}
      >
        {children}
      </h1>
    );
  },
};

const MDXPage: React.FC<MDXPageProps> = ({ children, data }) => {
  const items = data.mdx.tableOfContents?.items || [];
  
  React.useEffect(() => {
    console.log('Checking heading elements:');
    document.querySelectorAll('h1, h2, h3, h4, h5, h6').forEach(heading => {
      console.log('Found heading:', {
        id: heading.id,
        text: heading.textContent,
        tag: heading.tagName
      });
    });
  }, []);

  return (
    <Layout title="MDX Page">
      <MDXNavigation items={items} />
      <div className={mdxContentStyles.mdxContainer}>
        <div className={mdxContentStyles.content}>
          <MDXProvider components={components}>
            {children}
          </MDXProvider>
        </div>
      </div>
    </Layout>
  );
};

export const query = graphql`
  query($id: String!) {
    mdx(id: { eq: $id }) {
      tableOfContents
      frontmatter {
        title
      }
    }
  }
`;

export default MDXPage;
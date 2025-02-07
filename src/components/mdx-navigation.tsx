import * as React from 'react';
import * as styles from '../styles/modules/mdx-navigation.module.scss';

interface NavigationItem {
  url: string;
  title: string;
}

interface MDXNavigationProps {
  items: NavigationItem[];
}

const MDXNavigation: React.FC<MDXNavigationProps> = ({ items }) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, url: string) => {
    e.preventDefault();
    const id = url.replace('#', '');
    const element = document.getElementById(id);
    
    if (element) {
      const elementTop = element.offsetTop;
      const offset = 100;
      const finalPosition = elementTop - offset;
      
      window.scrollTo({
        top: finalPosition,
        behavior: 'auto'
      });
    }
  };

  return (
    <nav className={styles.navigation}>
      <ul className={styles.navList}>
        {items.map((item, index) => (
          <li key={index} className={styles.navItem}>
            <a 
              href={item.url}
              className={styles.navLink}
              onClick={(e) => handleClick(e, item.url)}
            >
              {item.title}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default MDXNavigation; 
import React from 'react';
import { StaticImage } from "gatsby-plugin-image";
import * as styles from '../styles/modules/about-section.module.scss';

interface AboutImageLayoutProps {
  children: React.ReactNode;
}

const AboutImageLayout: React.FC<AboutImageLayoutProps> = ({ children }) => {
  return (
    <div className={styles.section}>
      <div className={styles.imageWrapper}>
        <StaticImage
          src="../images/group_photo.png"
          alt="团队合照"
          placeholder="blurred"
          aspectRatio={4/3}
          width={400}
          className={styles.image}
        />
      </div>
      <div className={styles.content}>
        {children}
      </div>
    </div>
  );
};

export default AboutImageLayout;
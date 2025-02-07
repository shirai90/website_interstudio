import * as React from 'react'
import { Link } from 'gatsby'
import { StaticImage } from "gatsby-plugin-image"
import * as styles from '../styles/modules/layout.module.scss'

interface LayoutProps {
  title: string;
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ title, children }) => {
  const handleImageClick = (url: string) => {
    window.open(url, '_blank');
  };

  return (
    <div>
      <div className={styles.topBar}>
        {/* 左侧社团 logo */}
        <StaticImage
          className={styles.logo}
          src="../images/inter_logo.png" 
          alt="interstudio"
          placeholder="blurred" // 加载时模糊效果
          layout="constrained" // 保持宽高比
          objectFit="contain"
          height={40} 
        />

        {/* 右侧三张跳转图片 */}
        <div className={styles.rightImages}>
          {/* 小红书图标 */}
          <div 
            className={styles.smallImageWrapper}
            onClick={() => handleImageClick('https://www.xiaohongshu.com/explore')}
            data-platform="小红书"
          >
            <StaticImage
              src="../images/xhs.png"
              alt="小红书"
              placeholder="none"
              layout="fixed"
              width={30}
              height={30}
            />
          </div>

          {/* B站图标 */}
          <div 
            className={styles.smallImageWrapper}
            onClick={() => handleImageClick('https://www.bilibili.com/')}
            data-platform="哔哩哔哩"
          >
            <StaticImage
              src="../images/bilibili.png"
              alt="哔哩哔哩"
              placeholder="none"
              layout="fixed"
              width={30}
              height={30}
            />
          </div>

          {/* 微博图标 */}
          <div 
            className={styles.smallImageWrapper}
            onClick={() => handleImageClick('https://weibo.com/')}
            data-platform="微博"
          >
            <StaticImage
              src="../images/weibo.png"
              alt="微博"
              placeholder="none"
              layout="fixed"
              width={30}
              height={30}
            />
          </div>
        </div>
      </div>
        
      {/* 中部社团大logo */}
      <div className={styles.mainLogoWrapper}>
        <div 
          className={styles.mainImageWrapper}
          data-platform="首页"
        >
          <Link to="/">
            <StaticImage
              src="../images/inter_logo.png"
              alt="interstudio"
              placeholder="blurred"
              layout="constrained" 
              objectFit="contain"
              height={80}
              formats={["auto", "webp", "avif"]}
            />
          </Link>
        </div>
      </div>

      {/* 导航栏 */}
      <nav className={styles.navBar}>
        <div className={styles.navContainer}>
          <Link to="/about" className={styles.navLink}>关于我们</Link>
          <Link to="/service" className={styles.navLink}>服务项目</Link>
          <Link to="/activity" className={styles.navLink}>近期活动</Link>
          <Link to="/contact" className={styles.navLink}>联系我们</Link>
        </div>
      </nav>

      {/* 主内容区 */}
      <main className={styles.mainContent}>
        {children}
      </main>  

      <div className={styles.bottomBar}>
        {/* 左侧社团 logo 和地址 */}
        <div className={styles.bottomLeft}>
          <StaticImage
            src="../images/inter_logo.png"
            alt="interstudio"
            placeholder="blurred"
            layout="constrained"
            objectFit="contain"
            height={80}
            formats={["auto", "webp", "avif"]}
          />
          <p>社团办公室地址：[具体地址]</p>
        </div>

        {/* 中间联系方式 */}
        <div className={styles.bottomMiddle}>
          <h3>联系方式</h3>
          <p>电话：[电话号码]</p>
          <p>邮箱：[邮箱地址]</p>
          <div className={styles.middleImages}>
    
    {/* 小红书图标 */}
    <div 
      className={styles.smallImageWrapper}
      onClick={() => handleImageClick('https://www.xiaohongshu.com/explore')}
      data-platform="小红书"
    >
      <StaticImage
        src="../images/xhs.png"
        alt="小红书"
        placeholder="none"
        layout="fixed"
        width={30}
        height={30}
      />
    </div>

    {/* B站图标 */}
    <div 
      className={styles.smallImageWrapper}
      onClick={() => handleImageClick('https://www.bilibili.com/')}
      data-platform="哔哩哔哩"
    >
      <StaticImage
        src="../images/bilibili.png"
        alt="哔哩哔哩"
        placeholder="none"
        layout="fixed"
        width={30}
        height={30}
      />
    </div>

    {/* 微博图标 */}
    <div 
      className={styles.smallImageWrapper}
      onClick={() => handleImageClick('https://weibo.com/')}
      data-platform="微博"
    >
      <StaticImage
        src="../images/weibo.png"
        alt="微博"
        placeholder="none"
        layout="fixed"
        width={30}
        height={30}
      />
    </div>
  </div>
        </div>

        {/* 右侧竖向导航栏 */}
        <div className={styles.bottomRight}>
          <ul>
            <li><Link to="/about">关于我们</Link></li>
            <li><Link to="/service">服务项目</Link></li>
            <li><Link to="/activity">近期活动</Link></li>
            <li><Link to="/contact">联系我们</Link></li>
          </ul>
        </div>
      </div>

      <div className={styles.deepGrayBar}>
        <p>&copy; 2025 Interstudio. All rights reserved.</p>
      </div>

    </div>   
  );
};

export default Layout;
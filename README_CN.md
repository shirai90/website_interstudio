## 项目名称与简介:interstudio社团网站

欢迎使用本项目！这是一个基于 Gatsby 构建的社团网站，虽然暂时仅有一个简单的框架，尚未填充具体的社团事宜或美术设计。本网站基于gatsby，tyepscript，sass和mdx构建，感谢[iweb](https://shanghaitech-igem.github.io/iweb/2025/)提供的技术指导。以下是本地运行和开发的指南。

## 环境要求

在开始之前，请确保你的系统满足以下要求：

### 必需工具
- [Node.js](https://nodejs.org/) (推荐 v18.0.0 或更高版本)
- [Git](https://git-scm.com/)
- 包管理器：npm (Node.js 自带) 或 [yarn](https://yarnpkg.com/)

### 推荐工具
- [Visual Studio Code](https://code.visualstudio.com/) - 推荐的代码编辑器
- VS Code 插件：
  - ESLint
  - Prettier
  - TypeScript and JavaScript Language Features
  - SCSS IntelliSense

## 详细安装步骤

1. **安装 Node.js**
   - 访问 [Node.js 官网](https://nodejs.org/en/download)
   - 下载并安装与你的电脑适配的版本
   - 安装完成后，打开终端运行以下命令验证安装：
     ```bash
     node --version
     npm --version
     ```

2. **安装 Typescript**
   ```bash
   npm install -g typescript
   ```
   验证安装：
   ```bash
   tsc --version
   ```

3. **安装 Gatsby CLI**
   ```bash
   npm install -g gatsby-cli
   ```
   验证安装：
   ```bash
   gatsby --version
   ```

4. **克隆项目**
   ```bash
   git clone https://gitlab.com/interstudio1/interstudio_website
   cd gatsby-sharp
   ```

5. **安装项目依赖**
   ```bash
   npm install
   ```

6. **启动开发服务器**
   ```bash
   npm run develop
   ```
   或
   ```bash
   gatsby develop
   ```

**注意**
本项目使用了个性化的插件：gatsby-plugin-mdx-heading-anchor，用于在mdx文件中添加锚点，实现自动添加导航和跳转。项目中自带该插件的文件内容，且确定了依赖路径，理论上可以正常使用。如果该插件出现问题，可以前往[GitLab仓库]（https://gitlab.com/interstudio1/gatsby-plugin-mdx-heading-anchor/）下载安装并更新依赖路径。

## 常见问题解决

1. **依赖安装失败**
   ```bash
   npm cache clean --force
   rm -rf node_modules
   npm install
   ```

2. **Gatsby 开发服务器启动失败**
   ```bash
   gatsby clean
   gatsby develop
   ```

3. **TypeScript 类型错误**
   - 确保已安装所有必要的 @types 包
   - 运行 `npm run type-check` 检查类型错误

## 具体内容开发指南

见项目内部'/guide'网页，可通过首页链接跳转或访问guide.mdx文件查看。
更详细的环境配置及项目结构说明请参考[iweb](https://shanghaitech-igem.github.io/iweb/2025/)。
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

## 安装步骤

1. **克隆项目**
   打开终端，运行以下命令：
   ```bash
   git clone https://github.com/你的用户名/你的项目名.git
   cd 你的项目名
   ```

2. **安装依赖**
   在项目根目录下运行：
   ```bash
   npm install
   ```

3. **启动开发服务器**
   运行以下命令启动本地开发服务器：
   ```bash
   npm run develop
   ```
   开发服务器启动后，打开浏览器访问 `http://localhost:8000` 即可查看网站。

4. **构建生产版本**
   如果需要构建生产版本，运行：
   ```bash
   npm run build
   ```
   构建完成后，可以使用以下命令启动本地服务器测试生产版本：
   ```bash
   npm run serve
   ```

## 项目结构

简要说明项目的主要文件和目录结构：
## Project Name and Introduction: Interstudio Club Website

Welcome to use this project! This is a club website built with Gatsby. Although it currently only has a simple framework and no specific club - related content or graphic design has been added yet. This website is built based on Gatsby, TypeScript, Sass, and MDX. Thanks to [iweb](https://shanghaitech-igem.github.io/iweb/2025/) for providing technical guidance. The following is a guide for local running and development.

## Environment Requirements

Before you start, please make sure your system meets the following requirements:

### Required Tools
- [Node.js](https://nodejs.org/) (Version v18.0.0 or higher is recommended)
- [Git](https://git-scm.com/)
- Package manager: npm (Comes with Node.js) or [yarn](https://yarnpkg.com/)

### Recommended Tools
- [Visual Studio Code](https://code.visualstudio.com/) - The recommended code editor
- VS Code plugins:
  - ESLint
  - Prettier
  - TypeScript and JavaScript Language Features
  - SCSS IntelliSense

## Detailed Installation Steps

1. **Install Node.js**
   - Visit the [Node.js official website](https://nodejs.org/en/download).
   - Download and install the version that suits your computer.
   - After the installation is complete, open the terminal and run the following commands to verify the installation:
     ```bash
     node --version
     npm --version
     ```

2. **Install TypeScript**
   ```bash
   npm install -g typescript
   ```
   Verify the installation:
   ```bash
   tsc --version
   ```

3. **Install Gatsby CLI**
   ```bash
   npm install -g gatsby - cli
   ```
   Verify the installation:
   ```bash
   gatsby --version
   ```

4. **Clone the project**
   ```bash
   git clone https://gitlab.com/interstudio1/interstudio_website
   cd gatsby - sharp
   ```

5. **Install project dependencies**
   ```bash
   npm install
   ```

6. **Start the development server**
   ```bash
   npm run develop
   ```
   Or
   ```bash
   gatsby develop
   ```

**Note**
This project uses a customized plugin: gatsby-plugin-mdx-heading-anchor, which is used to add anchors to MDX files, enabling automatic navigation and jumping. The project comes with the file content of this plugin, and the dependency path is determined. In theory, it can be used normally.   
If there are any issues with this plugin, you can go to the [GitLab repository](https://gitlab.com/interstudio1/gatsby-plugin-mdx-heading-anchor/) to download, install, and update the dependency path.

## Solutions to Common Problems

1. **Dependency installation fails**
   ```bash
   npm cache clean --force
   rm -rf node_modules
   npm install
   ```

2. **Gatsby development server fails to start**
   ```bash
   gatsby clean
   gatsby develop
   ```

3. **TypeScript type errors**
   - Make sure all necessary @types packages are installed.
   - Run `npm run type - check` to check for type errors.

## Guide to Specific Content Development

Refer to the '/guide' page inside the project. You can access it by clicking the link on the homepage or by opening the guide.mdx file.
For more detailed environment configuration and project structure instructions, please refer to [iweb](https://shanghaitech-igem.github.io/iweb/2025/).
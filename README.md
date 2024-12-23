<p align="center">
  <a href="https://www.gatsbyjs.com/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter-ts">
    <img alt="Gatsby" src="https://www.gatsbyjs.com/Gatsby-Monogram.svg" width="60" />
  </a>
</p>
<h1 align="center">
  Gatsby Minimal TypeScript Starter
</h1>

## 🚀 Quick start

1.  **Create a Gatsby site.**

    Use the Gatsby CLI to create a new site, specifying the minimal TypeScript starter.

    ```shell
    # create a new Gatsby site using the minimal TypeScript starter
    npm init gatsby -- -ts
    ```

2.  **Start developing.**

    Navigate into your new site’s directory and start it up.

    ```shell
    cd my-gatsby-site/
    npm run develop
    ```

3.  **Open the code and start customizing!**

    Your site is now running at http://localhost:8000!

    Edit `src/pages/index.tsx` to see your site update in real-time!

4.  **Learn more**

    - [Documentation](https://www.gatsbyjs.com/docs/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter-ts)
    - [Tutorials](https://www.gatsbyjs.com/docs/tutorial/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter-ts)
    - [Guides](https://www.gatsbyjs.com/docs/how-to/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter-ts)
    - [API Reference](https://www.gatsbyjs.com/docs/api-reference/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter-ts)
    - [Plugin Library](https://www.gatsbyjs.com/plugins?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter-ts)
    - [Cheat Sheet](https://www.gatsbyjs.com/docs/cheat-sheet/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter-ts)

## 🚀 Quick start (Netlify)

Deploy this starter with one click on [Netlify](https://app.netlify.com/signup):

[<img src="https://www.netlify.com/img/deploy/button.svg" alt="Deploy to Netlify" />](https://app.netlify.com/start/deploy?repository=https://github.com/gatsbyjs/gatsby-starter-minimal-ts)

## Migrate npm to pnpm

Migrate packages:

```shell
rm -rf node_modules
pnpm import
rm package-lock.json
pnpm install
```

[Only allow pnpm](https://pnpm.io/only-allow-pnpm), `package.json`:

```json
{
  "scripts": {
    "preinstall": "npx only-allow pnpm"
  }
}
```

Apply `.vscode/launch.json`:

```json
{
  "version": "0.2.0",
  "configurations": [
    // Gatsby Debugging the Build Process:: VS Code Debugger (Manual Config)
    // https://www.gatsbyjs.com/docs/debugging-the-build-process/#vs-code-debugger-manual-config
    {
      "name": "Gatsby develop",
      "type": "node",
      "request": "launch",
      "program": "${workspaceRoot}/node_modules/.bin/gatsby",
      "args": ["develop"],
      "skipFiles": ["<node_internals>/**"],
      "env": {
        "PARCEL_WORKERS": "0",
        "GATSBY_CPU_COUNT": "1"
      },
      // https://code.visualstudio.com/docs/nodejs/nodejs-debugging#_launch-configuration-support-for-npm-and-other-tools
      "runtimeExecutable": "pnpm",
      "runtimeArgs": ["--nolazy"],
      "console": "integratedTerminal"
    },
    {
      "name": "Gatsby build",
      "type": "node",
      "request": "launch",
      "program": "${workspaceRoot}/node_modules/.bin/gatsby",
      "args": ["build"],
      "env": {
        "PARCEL_WORKERS": "0",
        "GATSBY_CPU_COUNT": "1"
      },
      "runtimeExecutable": "pnpm",
      "runtimeArgs": ["--nolazy"],
      "console": "integratedTerminal"
    }
  ]
}
```

## Setup ESLint on workspace

1.  Make the `eslint.config.mjs` file:

    ```shell
    pnpm create @eslint/config@latest
    ```

2.  Install packages:

    ```shell
    pnpm add --save-dev eslint globals @eslint/js typescript-eslint eslint-plugin-react
    ```

3.  Resolve the dependence `eslint-plugin-flowtype`:

    ```shell
    Failed to load plugin 'flowtype' declared in 'BaseConfig » /Users/mkkim/projects/portal2312/gatsby/node_modules/.pnpm/eslint-config-react-app@6.0.0_@typescript-es
    lint+eslint-plugin@5.62.0_@typescript-eslint+pars_quwfol5nck5f7xypg3bpw7cfc4/node_modules/eslint-config-react-app/index.js': Package subpath
    './lib/rules/no-unused-expressions' is not defined by "exports" in
    /Users/mkkim/projects/portal2312/gatsby/node_modules/.pnpm/eslint-plugin-flowtype@5.10.0_eslint@9.15.0_jiti@1.21.6_/node_modules/eslint/package.json

    failed Building development bundle - 10.851s
    ERROR in Failed to load plugin 'flowtype' declared in 'BaseConfig » /Users/mkkim/projects/portal2312/gatsby/node_modules/.pnpm/eslint-config-react-app@6.0.0_@type
    script-eslint+eslint-plugin@5.62.0_@typescript-eslint+pars_quwfol5nck5f7xypg3bpw7cfc4/node_modules/eslint-config-react-app/index.js': Package subpath
    './lib/rules/no-unused-expressions' is not defined by "exports" in
    /Users/mkkim/projects/portal2312/gatsby/node_modules/.pnpm/eslint-plugin-flowtype@5.10.0_eslint@9.15.0_jiti@1.21.6_/node_modules/eslint/package.json

    Generating development JavaScript bundle failed
    ```

    Resolve:

    ```shell
    pnpm add --save-dev eslint-plugin-flowtype
    ```

## Setup prettier on workspace

1.  Install

    ```shell
    pnpm add --save-dev prettier \
    eslint-plugin-prettier \
    eslint-config-prettier \
    @trivago/prettier-plugin-sort-imports
    ```

2.  Apply [`eslint-plugin-prettier`](https://github.com/prettier/eslint-plugin-prettier) in the eslint configuration file.

3.  Apply[`eslint-config-prettier`](https://github.com/prettier/eslint-config-prettier) in the eslint configuration file.

## Setup deploy on workspace

https://www.gatsbyjs.com/docs/how-to/previews-deploys-hosting/how-gatsby-works-with-github-pages/#deploying-to-a-path-with-pathprefix

## Setup TypeScript and Gatsby

Refer to [here](https://www.gatsbyjs.com/docs/how-to/custom-configuration/typescript).

### CSS Modules

만약 tailwindcss 사용 시, `gatsby-browser.js` 안에 `import "./src/styles/global.css"` 을 주석을 해야 기본 스타일로 적용됩니다.

`src/module.css.d.ts`:

```shell
declare module "*.module.css";
```

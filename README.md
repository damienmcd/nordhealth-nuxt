# Nordhealth Provet Cloud Interview Task

This project is a Nuxt solution to the task set in the Nordhealth interview for the Senior Frontend Engineer role.

Live demo is available at [https://damienmcd-nordhealth.netlify.app/](https://damienmcd-nordhealth.netlify.app/)

A dummy API was set up for this project using [https://mockapi.io/](mockapi.io).

All data will be removed from the mock API account after presentation of this project.

## The Assignment

"Create a client-side only rendered Nuxt 3 application that allows people to sign up for a product. If you don't have any experience with Nuxt 3, it's OK to only use Vue 3. The form should contain fields for email and password, which should be required and show an error if no value is entered. The password field should have a way to make the password visible. The user should be able to choose to receive occasional product updates and announcements. Once signed up, they should be presented with a success page.

Please use the Provet Cloud Design System ([https://provetcloud.design/](https://provetcloud.design/)) appropriately.
Read [https://provetcloud.design/web-components/#installation-1](https://provetcloud.design/web-components/#installation-1) to learn how to use the Provet components in Vue. If possible, use TypeScript; however, JavaScript is also fine."

## Setting up the project

First clone the repository using the Terminal application of your choice:

```bash
git clone https://github.com/damienmcd/nordhealth-nuxt
```

Install the dependencies (you can use whichever package manager you like - npm, pnpm, bun, yarn, etc.):

```bash
# npm
npm install
```

The Provet Cloud Design System dependencies should already be installed. To check if they are installed, look at the list of dependencies in the `package.json` file.

If they are not already installed, add them with the below:

```bash
npm install @provetcloud/web-components @provetcloud/css --save
```

The task requires a "Client Only" solution. To ensure this application is "Client Only" set `ssr: false` in the `nuxt.config.ts` file.

If not add them with the below:

```js
// nuxt.config.ts
export default defineNuxtConfig({
  ssr: false
})
```

The types and editor integration should already be installed. If not add them by installing `@provetcloud/web-components-vue-types` and adding the following to your `tsconfig.json` file:

```json
{
  "compilerOptions": {
    "types": ["@provetcloud/web-components-vue-types"]
  }
}
```

Everything should be ready to go now.

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build
```

Locally preview production build:

```bash
# npm
npm run preview
```

## Tests

Run unit tests:

```bash
# npm
npm run test
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.

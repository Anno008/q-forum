# Q forum

![Build](https://github.com/Anno008/q-forum/actions/workflows/main.yml/badge.svg)
![Coverage lines](./coverageBadges/badge-lines.svg)
![Coverage functions](./coverageBadges/badge-functions.svg)
![Coverage branches](./coverageBadges/badge-branches.svg)
![Coverage statements](./coverageBadges/badge-statements.svg)

Small app for listing posts and comments and showing corresponding authors

## App previews
* App: https://q-forum-d9e91.web.app/posts
* Storybook: https://q-forum-storybook.web.app

## Setting up development environment
* Install [node](https://nodejs.org/en/), [pnpm](https://pnpm.io/)
* Editor [VSCode](https://code.visualstudio.com/)
* Extensions: Eslint

## Getting Started
Before running any of the scripts listed bellow, it is necessary to have all the packages installed, a.k.
a. `pnpm i`

* Scripts:
  * `pnpm dev` -> starts the development server.
  * `pnpm test` -> runs the unit tests.
  * `pnpm test:coverage` -> prints out the coverage in the terminal and generates the report.
  * `pnpm test:coverage:open` -> displays the code coverage in a browser.
  * `pnpm test:e2e` -> headless e2e tests
  * `pnpm test:e2e:open` -> opens a cypress chromium window for e2e tests, requires that the web server is running
  * `pnpm lint` -> goes through the code and checks for linting issues.
  * `pnpm lint:types` -> goes through the code and checks for typescript violations.
  * `pnpm lint:fix` -> goes through the code and checks for linting issues and fixes them where possible.

## CI/CD
Is executed on github via github actions. It installs the dependencies, lint the code, run the tests and deploy the site to firebase hosting.

## E2E tests
Running E2E tests locally:
1. `pnpm i` (installs the dependencies)
2. `pnpm dev` (starts the development server on port 3000 which the e2e tests will target)
3. `pnpm test:e2e:open` (opens the cypress window) or `pnpm test:e2e` runs the e2e tests in headless mode

## Third party libraries
* styled-components -> easy parametrization of css for making re usable building blocks
* typescript -> superset of javascript, introduces type definitions.
* react-router-dom -> navigation library
* eslint -> static analyzer, validates code against defined rules
* jest -> test runner
* cypress -> end to end testing framework 
* react-hook-form -> lib for simplifying form validation
* yup -> schema builder for validation
* storybook -> visually testing ui components in isolation (Really doesn't like me)
* cross-env -> easy setting of environment variables independently of the OS
* vite -> build tool for faster development.

## Implementation considerations
* In the end I managed to integrate storybook, but it is far from perfect, conflicting package versions and not ideal package manager for the job (pnpm)
* The project has a healthy amount of unit test coverage
* Although there are just a few examples of e2e cypress tests integrated with cypress-testing-library they mostly serve as a demonstration.
* The CI/CD is relatively naively implemented, thought for the scope of this project I felt like it is sufficient. It runs github actions, and deploys the site to firebase 

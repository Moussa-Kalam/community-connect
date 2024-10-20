<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456

[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg" alt="Donate us"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow" alt="Follow us on Twitter"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

This is project is the backend for the community connect application. The backend is built with NestJS, TypeScript, and
TypeORM for database management.

## Set up of the Development environment

This guide is a step-by-step approach to ensure consistency across team members working on the application and simplify
the setup process. Following these steps will help in achieving a Docker-based development environment for a NestJS
project, integrating PostgreSQL database, and enabling live code reloading for efficient development iterations.

### Prerequisites

- [Docker](https://docs.docker.com/get-docker/): Ensure Docker and Docker Compose are installed on your development
  machine. Docker Compose is included with Docker Desktop for Windows and macOS.
- [Node.js](https://nodejs.org/en/): Ensure Node.js is installed on your development machine. The project uses Node.js
  version `v20.18.0`.
-

### Steps for the setup

#### Clone the repository and navigate to the backend directory

```sh
git clone https://github.com/Moussa-Kalam/community-connect.git
```

```sh
cd community-connect/backend
```

#### Install the project dependencies

```sh
npm install
``` 

#### Environment configuration

- Rename the `.env.example` file to `.env` and update the environment variables to match your development environment's
  configurations.
  **The `.env`** should never be committed to version control to protect sensitive information. Check that it is added
  to the `.gitignore` file.
- Here is an example of the `.env` file:

```sh
# Database configuration
DB_USERNAME=user
DB_PASSWORD=password
DB_NAME=nestjs-db
DB_PORT=5432

# Application configuration
PORT=3000

# JWT configuration
 JWT_SECRET=your_secret
 JWT_TOKEN_AUDIENCE=community_connect
 JWT_TOKEN_ISSUER=community_connect
 JWT_ACCESS_TOKEN_TTL=3600
```

#### Build the Docker container

```sh
npm run docker:build
```

This command starts the container based on the configuration defined in `Dockerfile`, `docker-compose.yml`, and the
`.env` files.

#### Start the Docker container

Start your application along with its services by running the following commands:

```sh
npm run docker:start
```

This command starts the containers based on the configuration defined earlier.
You can then access your running application at `http://localhost:3000`.

#### Stop the Docker container

To stop the running containers, run the following command:

```sh
npm run docker:stop
```

This command stops and removes the containers, networks, and volumes created by the previous command.

#### Rebuid the Docker images

If you need to rebuild the Docker images (e.g, after dependencies have been added or removed), you can run the following
command:

```sh
npm run docker:rebuild
```

### Additional Commands

- `npm run start:dev`: Starts the NestJS application in development mode with live reloading enabled.
- `npm run start:prod`: Runs the compiled application in production mode.
- `npm run build`: Compiles the application, preparing it for production deployment.

### Tips for Success

- Always ensure that your Docker Desktop (or equivalent)
- Always ensure your `.env` file is up to date with the required environment variables.
- Use `docker-compose down` to stop the Docker containers when you're done.
- Consult the `docker-compose.yml` and `Dockerfile` for environment and service configuration details.

By adhering to this guide, you'll be able to get your development environment up and running smoothly, allowing you to
focus on developing the application.

## License

Nest is [MIT licensed](https://github.com/nestjs/nest/blob/master/LICENSE).

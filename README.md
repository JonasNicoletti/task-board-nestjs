
  
## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ npm install
```

## Running the app

This enviroment variables has do be defined(example values):
  - SERVER_PORT=4000
  - DATABASE_HOST=postgres <== this has to be the name of your postgress service in the docker-compose.yaml
  - PORT=4000
  - DATABASE_PORT=5432
  - DATABASE_USER=postgres
  - DATABASE_PASSWORD=postgres
  - DATABASE_DB=task_board

```bash

# run docker with docker-compose
$ systemctl start docker
$ docker-compose up -d

```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```


# JSON Message Store

## Description

Create a NestJS application that cover the goal of storing and retrieving string messages from a JSON stored file.

### Goal

Store and Retrieve messages stored in a plain JSON file. A message is a simply string.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
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

## Routes

| Route | Parameters | Description                  |
| ----- | ---------- | ---------------------------- |
| /     | none       | List all the stored messages |
| /     | {id}       | Retrieve a message by its ID |

## License

Nest is [MIT licensed](LICENSE).

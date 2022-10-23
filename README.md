# Rocket Trip Calculator Frontend

Angular application to allow users track their expenses during the trip.
After the trip, each participator's expenses a tallied and money is exchanged.

## Development server

Make sure you have NodeJS and docker installed. 
See more [NodeJS]([https://nodejs.org/en/]) and [Docker](https://www.docker.com/)
This application needs API to work with. You may use docker to setup local API.
Run `docker-compose up` to setup two docker containers. One for API and another for MongoDB
Once docker containers run you should run `ng serve` to start application on `http://localhost:4200/`
in development mode.

Always make sure frontend version matches backend version.
You may find frontend version in `package.json` file.
Check `docker-compose.yaml` file to find API version

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).


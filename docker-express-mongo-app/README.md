## Build the image
Run - `docker-compose up --build`

## To stop the container
Run - `docker-compose down`

## To stop the container and delete data
Run - `docker-compose down -v`

## To preview api
To preview the API in the browser or access it with Postman, use port 5005 that is http://localhost:5005

## Why this project

- Build an optimized Express.js image with multi-stage Docker builds.
- Use .env variables to store secrets (MongoDB connection).
- Connect Express.js and MongoDB in Docker using docker-compose.yml.
- Mount volumes for persistent database storage.
- Expose ports for communication (5005:5005).
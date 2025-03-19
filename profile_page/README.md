# User Profile

## Description
A simple full-stack user profile application that allows users to update their profile. Built using TypeScript, Pug and MongoDB. This project was built to learn how to spin and connect applications to Docker containers.

## Installation for development purpose
1. Option 1
- Clone the repository and cd into the project directory
- Install Docker on your machine 
- Run `npm install` or `yarn add` to install all project dependencies  
- Run `docker-compose -f mongo.yml up -d` to spin up a mongodb and mongo-express containers  
- Create .env file and add your database details (check .env.example for guidiance)  
- Run `npm run develop` or `yarn develop` to start local server which will run on localhost:1337  
- Run `docker-compose -f mongo.yml down` to stop the running containers  
- Run `docker-compose -f mongo.yml down -v` to remove containers   

--- 

2. Option 2
Run `docker-compose up --build` to spin up a app, mongodb and mongo-express containers 
- Run `docker-compose -f mongo.yml down` to stop the running containers  
- Run `docker-compose -f mongo.yml down -v` to remove containers 

### Running the image
Run - `docker run --name profile-page-container -p 1337:1337 -it profile-page` 

## Usage
open `http://localhost:1337` in your browser to see the running application.      
open `http://localhost:8081` in your browser to see the running mongo-express interface. User `admin` and `pass` as basic authentication

## Built With
- Pug - HTML template engine
- CSS - For styling
- Express - The web framework used
- TypeScript - For static typing
- MongoDB - DataBase Management System

## Contributing: 
To contribute, raise an issue and it will be reviewed

## Author
[Odinaka Joy](https://dinakajoy/)

## License
This project is licensed under the MIT License - see the [MIT License](https://opensource.org/licenses/MIT) file for details

## Build the image
Run - `docker build -t my-express-app .`

## Running the image
Run - `docker run --rm --name my-express-app-container -it -p 3000:3000 my-express-app`

## To preview api
To preview the API in the browser or access it with Postman, use port 3000 that is http://localhost:3000
- To view todos: http://localhost:3000/todos
- To view todo: http://localhost:3000/todos/:id
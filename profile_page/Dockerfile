# Use an official Node.js image
FROM node:22.14.0-alpine3.20

# Set environment variables
ENV DBURL=mongodb://myRootUser:myPassword@localhost:27017

# Set the working directory inside the container
WORKDIR /home/app

# Copy package.json and package-lock.json first (if available)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application files
COPY . .

# Expose necessary ports (if your app runs on a specific port)
EXPOSE 1337

# Start the application
CMD ["npx", "nodemon", "src/app.ts"]
# Create from a base image
FROM node:22.14.0-alpine3.20

# Set working directory
WORKDIR /usr/src/app

# Copy Package.json files
COPY package*.json ./

# Install production-only dependencies
RUN npm install

# Copy all files now
COPY . .

# Expose port 3000 to your host machine
EXPOSE 3000

# Run Npm Start command
CMD [ "npm", "start"]
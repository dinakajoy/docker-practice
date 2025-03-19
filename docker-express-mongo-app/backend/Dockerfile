# Use official Node.js as a base image
FROM node:18 AS builder
WORKDIR /app
COPY package.json .
RUN npm install

# Create final lightweight image
FROM node:18
WORKDIR /app
COPY --from=builder /app/node_modules ./node_modules
COPY . .

# Set environment variables
ENV NODE_ENV=production

# Expose port 5005
EXPOSE 5005

# Start the application
CMD ["node", "server.js"]

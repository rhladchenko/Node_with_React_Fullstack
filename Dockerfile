# Dockerfile

# Use an official Node.js runtime as a parent image
FROM node:18

# Set the working directory to /app
WORKDIR /app

# Copy package.json and package-lock.json to the container at /app
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the current directory contents into the container at /app
COPY . .

# Specify the port number the container should expose
EXPOSE 3000

# Run the application
CMD ["npm", "start"]

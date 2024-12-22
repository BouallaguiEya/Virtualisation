# Use the official Node.js image as the base image
FROM node:18-alpine AS build

# Set the working directory
WORKDIR /app

# Copy the package.json and package-lock.json files
COPY package*.json ./

# Install the dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the Angular application
RUN npm run build --prod

# Use the official Nginx image to serve the application
FROM nginx:alpine

# Copy the built Angular application from the build stage
COPY nginx.conf /etc/nginx/nginx.conf.template
COPY mime.types /etc/nginx/mime.types

COPY --from=build /app/dist/virtualization-front/browser /usr/share/nginx/html

# Expose port 80
EXPOSE 4000

# Substitute environment variables in nginx.conf
RUN #envsubst '$$BACKEND_URL $$SERVER_NAME' < /etc/nginx/nginx.conf.template > /etc/nginx/nginx.conf

# Start Nginx server
CMD ["nginx", "-g", "daemon off;"]

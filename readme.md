# Eya BOUALLAGUI (4A FISE 47 IA ) Project

This project consists of a Spring Boot backend and an Angular frontend, both containerized using Docker. 
The backend is a Spring Boot application running on Java 17 and Spring 3, while the frontend is an Angular 17 application served by Nginx.
## Application
The application is a user manager application. 
We can: 
- Sign up to add user.
- Sign in with login and password the application persist current user in local storage.
- Delete users using the users list page.
- Application redirect user to sign in page if the user is not connected (no user in local storage)

## Project Structure

- `docker-compose.yml`: Docker Compose file to orchestrate the services.
- `virtualization/`: Directory containing the Spring Boot backend application.
- `virtualization-front/`: Directory containing the Angular frontend application.

## Prerequisites

- Docker
- Docker Compose

## Getting Started

To start the application, simply run:

```bash
docker-compose up
```

This command will build and start the following services:
- Spring Boot backend
- Angular frontend served by Nginx
- PostgreSQL database
- pgAdmin for database management

## Advanced Configuration

You can customize the following settings in the `docker-compose.yml` file:

- **Database Schema/Strategy**: Modify the database schema or strategy as needed.
- **Credentials**: Update the database credentials.
- **Server Address and Port**: Change the server address and port for the backend and frontend services.

## Nginx Configuration

The Nginx server is configured from scratch to serve the Angular frontend and route requests to the Spring Boot backend. The configuration ensures that the frontend and backend are properly integrated.

## Security

For security reasons:
- The backend is not accessible from the host.
- The database is only accessible through pgAdmin, which is also deployed via Docker.

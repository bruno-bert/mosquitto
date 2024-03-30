# Use the official Mosquitto image as the base image
FROM eclipse-mosquitto:latest

EXPOSE 1883

# Copy custom configuration file to the container
COPY mosquitto.conf /mosquitto/config/mosquitto.conf



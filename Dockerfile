FROM ubuntu
FROM node:latest

RUN echo "docker file is running"

WORKDIR /app

COPY . /app/

RUN apt update 

RUN npm install

RUN ["ls"]

CMD ["index.js"]

# EXPOSE 3000 

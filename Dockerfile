FROM node:14.15.4-alpine

RUN mkdir /app
COPY . /app
WORKDIR /app

RUN yarn install --check-files

EXPOSE 3001:3000

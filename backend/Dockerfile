FROM node:14.18.1 AS development

WORKDIR /backend

COPY package*.json .

RUN npm install

COPY . .
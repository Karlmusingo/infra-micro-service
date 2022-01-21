FROM node:16.13.2-alpine3.14

WORKDIR /usr/src/app

COPY package.json .
COPY yarn.lock .

RUN yarn install

COPY . .

EXPOSE 4000

WORKDIR /usr/src/app/packages/auth

RUN yarn start



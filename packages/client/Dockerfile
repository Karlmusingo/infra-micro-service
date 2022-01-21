FROM node:16.13.2-alpine3.14

WORKDIR /usr/src/app

COPY package.json .
COPY yarn.lock .

RUN yarn install

COPY . .

EXPOSE 3000

WORKDIR /usr/src/app/packages/auth

CMD [ "yarn", "start" ]



FROM node:16.13.2-alpine3.14

COPY package.json .
COPY yarn.lock .
COPY lerna.json .

COPY packages/auth/package.json packages/auth/package.json
COPY packages/client/package.json packages/client/package.json

RUN yarn install

COPY . .

CMD [ "yarn", "build" ]



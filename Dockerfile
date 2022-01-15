FROM node:16-alpine

ADD --chown=node:node package.json package.json
ADD --chown=node:node yarn.lock yarn.lock

RUN yarn
ADD --chown=node:node . .

RUN yarn build
EXPOSE 3000

CMD [ "yarn", "start" ]

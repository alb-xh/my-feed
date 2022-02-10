FROM node:16-alpine

RUN mkdir -p /home/app

COPY . /home/app

WORKDIR /home/app

RUN yarn install

RUN yarn run clear-data

CMD ["yarn", "start"]

FROM node:latest

RUN mkdir /app
WORKDIR /app

#ENV PATH /app/node_modules/.bin:$PATH
COPY . /app/
RUN yarn install

ENTRYPOINT ["yarn", "start"]

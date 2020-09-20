FROM node:9.10.0

RUN npm init -y

RUN npm install redis redis-cluster redis-server

WORKDIR /redis-docker

COPY redis-cluster.js .

CMD ["node","redis-cluster.js"]

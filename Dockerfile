FROM node:current-alpine

USER root

RUN apk add --no-cache git nodejs bash

RUN adduser -D -s /bin/bash user

COPY . /kyc-feed-api

WORKDIR /kyc-feed-api

RUN npm i

USER user

CMD ["node", "index.js"]

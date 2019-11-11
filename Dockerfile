FROM node:dubnium-alpine

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm install

COPY . .

CMD npm start
EXPOSE 3002

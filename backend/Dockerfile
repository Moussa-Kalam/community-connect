FROM node:20

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm ci

COPY . .

ENV PORT=3000

EXPOSE $PORT

RUN npm rebuild bcrypt --build-from-source

CMD [ "npm", "run", "start:dev" ]
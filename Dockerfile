FROM node:20.12.2-alpine


WORKDIR /ap

COPY package*.json .

RUN npm install

COPY . .

EXPOSE 3006

CMD [ "npm","run","dev" ]



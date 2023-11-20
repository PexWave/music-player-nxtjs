FROM node:21.2.0-bullseye-slim

WORKDIR /mnt/app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "run", "dev"]
FROM node:21.2.0-bullseye-slim

WORKDIR /mnt/app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 4000

CMD ["npm", "run", "dev", "-p", "4000"]
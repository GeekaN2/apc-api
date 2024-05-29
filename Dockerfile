FROM node:20

WORKDIR /app

COPY package*.json ./
COPY prisma ./prisma/

RUN npm install

RUN npm run prisma

COPY . .

RUN npm run build

CMD [ "npm", "run", "start:dev" ]
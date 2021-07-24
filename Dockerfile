FROM node:16
WORKDIR /usr/src/app

COPY package*.json ./
RUN npm ci

COPY . .
EXPOSE 3000

RUN npm run build
CMD ["npm", "start"]
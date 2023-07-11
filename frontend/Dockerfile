# syntax=docker/dockerfile:1
FROM node:20-alpine
EXPOSE 8080/tcp
WORKDIR /app
COPY ["package.json", "package-lock.json*", "./"]
RUN npm install -g npm@9.8.0
RUN npm install @vue/cli-service --save-dev
RUN rm -rf node_modules package-lock.json && npm install
COPY . .
CMD ["npm", "run", "serve"]

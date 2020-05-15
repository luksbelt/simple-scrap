FROM node:14.1.0
WORKDIR /app
COPY package.json ./
RUN npm install --silent
COPY . ./

CMD [ "npm", "run", "dev"]

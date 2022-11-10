FROM node:18-alpine
MAINTAINER flyduck
LABEL description="express project for docker" version="1.0" owner="flyduck"
# Create app directory
WORKDIR /usr/src/app
# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./
RUN npm install
# If you are building your code for production
# RUN npm ci --only=production
# Bundle app source
COPY . .
EXPOSE 80
EXPOSE 443
CMD [ "node", "server_with_express.js" ]

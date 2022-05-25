FROM node:latest

RUN mkdir -p /user/src
WORKDIR /user/src

COPY ./src /user/src/

RUN cd /user/src
RUN npm install
CMD ["npm", "start"]
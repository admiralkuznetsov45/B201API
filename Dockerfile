FROM node:12.22.1-alpine
EXPOSE 8080
WORKDIR /B201API
COPY . /B201API
RUN npm install --production 
CMD [ "node","app.js" ]
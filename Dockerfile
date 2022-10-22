FROM node:16.10 as node
WORKDIR /app
COPY . .
RUN npm install
EXPOSE 4200
CMD /app/node_modules/ .bin/ng serve --host 0.0.0.0 --disableHostCheck

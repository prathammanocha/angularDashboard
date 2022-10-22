FROM node:16.10 as node
WORKDIR /app
COPY . .
RUN npm install
RUN npm install json-server
RUN npm run build --prod
EXPOSE 3000
ENTRYPOINT ["json-server", "-H", "0.0.0.0", "--watch", "/app/db.json"]
RUN npm install -g angular-http-server
WORKDIR /app/dist/angular-responsive-sidebar
EXPOSE 8080
CMD ["angular-http-server", "-p", "8080"]
FROM node:16.10 as node
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build --prod
RUN npm install -g angular-http-server
WORKDIR /app/dist/angular-responsive-sidebar
EXPOSE 8080
CMD ["angular-http-server", "-p", "8080"]
#RUN npm install json-server
#CMD ["json-server", "-H", "0.0.0.0", "--watch", "/app/db.json"]
EXPOSE 3000
ENTRYPOINT ["json-server", "-H", "0.0.0.0", "--watch", "/app/db.json"]
RUN npm install -g angular-http-server
WORKDIR /app/dist/angular-responsive-sidebar
EXPOSE 8080
CMD ["angular-http-server", "-p", "8080"]

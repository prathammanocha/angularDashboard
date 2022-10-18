FROM node:16.10 as node
WORKDIR /app
COPY . .
COPY ./ /opt/mockBackend.json
RUN npm install
RUN npm install json-server
RUN npm run build --prod
EXPOSE 3000
CMD ["json-server", "-H", "0.0.0.0", "--watch", "/app/db.json"]
#stage 2
FROM nginx:alpine
COPY --from=node /app/dist/angular-responsive-sidebar /usr/share/nginx/html
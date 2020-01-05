FROM node:13.5.0-alpine3.11 as npm-installer
WORKDIR /opt/app
COPY code ./.
RUN npm install
RUN npm run build

FROM node:13.5.0-alpine3.11
ENV WORKING_DIR /var/www/html
WORKDIR ${WORKING_DIR}
COPY --from=npm-installer /opt/app/node_modules ${WORKING_DIR}/node_modules
COPY --from=npm-installer /opt/app/dist ${WORKING_DIR}/dist
COPY --from=npm-installer /opt/app/package*.json ${WORKING_DIR}/
CMD ["npm", "run", "start:prod"]

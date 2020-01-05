FROM node:13.3.0-stretch as npm-installer
WORKDIR /opt/app
COPY code ./.
RUN npm install
RUN npm run build

FROM node:13.3.0-stretch
ENV WORKING_DIR /var/www/html
WORKDIR ${WORKING_DIR}
COPY --from=npm-installer /opt/app/node_modules ${WORKING_DIR}/node_modules
COPY --from=npm-installer /opt/app/dist ${WORKING_DIR}/dist
CMD ["npm", "run", "start:prod"]

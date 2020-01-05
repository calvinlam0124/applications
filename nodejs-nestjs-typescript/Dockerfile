FROM node:13.3.0-stretch as npm-installer
COPY code /opt/app
WORKDIR /opt/app
RUN npm install
RUN npm build

FROM node:13.3.0-stretch
ENV WORKING_DIR /var/www/html
ENV PORT 3000
COPY --from=npm-installer /opt/app/node_modules ${WORKING_DIR}/node_modules
COPY --from=npm-installer /opt/app/dist ${WORKING_DIR}/dist
WORKDIR ${WORKING_DIR}
EXPOSE ${PORT}
CMD ["node", "dist/main.js"]

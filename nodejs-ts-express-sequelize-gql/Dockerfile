FROM node:13.6.0-stretch as npm-installer
COPY . /opt/app/.
WORKDIR /opt/app
RUN npm install
#RUN npm rebuild sqlite3 --build-from-source
RUN npm run build

FROM node:13.6.0-stretch
#FROM node:12.14.1-stretch
#FROM node:10.18.0-stretch
#FROM node:9.4.0-stretch
RUN apt-get update && apt-get install -y sqlite3 libsqlite3-dev sqlite3*
ENV WORKING_DIR /opt/app
ENV PORT 8080
COPY --from=npm-installer /opt/app/node_modules ${WORKING_DIR}/node_modules/
COPY --from=npm-installer /opt/app/dist ${WORKING_DIR}/dist/
COPY --from=npm-installer /opt/app/package*.json ${WORKING_DIR}/
WORKDIR ${WORKING_DIR}
COPY ./.env ${WORKING_DIR}/.env
COPY ./database.sqlite3 ${WORKING_DIR}/database.sqlite3
COPY ./database/ ${WORKING_DIR}/database/
EXPOSE ${PORT}
RUN npm install -s sqlite3
CMD ["npm", "run", "start"]

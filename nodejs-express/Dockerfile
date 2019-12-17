FROM node:13.3.0-stretch as npm-installer
COPY code /opt/app
WORKDIR /opt/app
RUN npm install

FROM node:13.3.0-stretch
ENV WORKING_DIR /opt/app
ENV PORT 8080
COPY --from=npm-installer /opt/app/node_modules ${WORKING_DIR}/node_modules 
WORKDIR ${WORKING_DIR}
COPY code ${WORKING_DIR}
EXPOSE ${PORT}
CMD ["npm", "start"]
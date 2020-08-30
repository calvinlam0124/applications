### Basic Usage
```shell script
# docker.dev
DOCKER_IMAGE_NAME=localhost-sequelize-tinker
docker build --no-cache -f Dockerfile.dev -t $DOCKER_IMAGE_NAME  .
docker run --rm -it $DOCKER_IMAGE_NAME

# attach the volume
docker run --rm -it --name localhost-test-node \
  -w /opt/app \
  -v $(pwd)/config:/opt/app/config.production:ro \
  node:13.6.0-stretch \
  sh -c "npx sequelize-cli db:migrate; npx sequelize-cli db:seed:all; npx sequelize-tinker"
```

### Install from scratch
```shell script
npm init -y
npm install --save --dev sequelize-cli
npm install --save --dev sequelize
npm install --save --dev sqlite3
npx sequelize-cli init
cp -a config.production/config.json config/config.json
npx sequelize-cli db:migrate:status # work

# generate
npx sequelize-cli model:generate --name User --attributes firstName:string,lastName:string,email:string
npx sequelize-cli seed:generate --name demo-user
# run
npx sequelize-cli db:migrate
npx sequelize-cli db:seed:all

# tinker
npm i --dev sequelize-tinker
npm install --dev --save sqlite3 # already installed
npx sequelize-tinker
#> User.findOne()
#> User.findOne().then( user=>console.log(JSON.stringify(user)) )
#> .exit
```

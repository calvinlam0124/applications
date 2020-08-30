### Script
```shell script
npm init -y
npm install --save sequelize-cli

npx sequelize-cli init
npx sequelize-cli db:migrate:status
npx sequelize-cli model:generate --name User --attributes firstName:string,lastName:string,email:string
npx sequelize-cli db:migrate
npx sequelize-cli seed:generate --name demo-user
npx sequelize-cli db:seed:all




npm i --dev sequelize-tinker
npm install --dev --save sqlite3
```

### Typescript
[x] (doesnt work) https://www.npmjs.com/package/sequelize-cli-typescript

### Helper / Tools
- [github/sequelize/sequelize-auto](https://github.com/sequelize/sequelize-auto) - Automatically generate bare sequelize models from your database.



### sequelize-auto
```shell script
npm init -y
npm install -d sequelize-auto
npm install -d sqlite3


npx sequelize-auto -h localhost -u nothing -d ../database.sqlite3 --dialect sqlite \
  -z -o "./ts-models"
```


### Docker
```shell script
docker run --rm -it --name localhost-test-node \
  -w /opt/app \
  -v $(pwd):/opt/app \
  node:13.6.0-stretch \
  bash

# npx sequelize-cli db:migrate:status
# npm install --save --dev sequelize-cli
#apt-get update && apt-get install -y sqlite3
#npm install -s sqlite3

docker run --rm -it --name localhost-test-node \
  -w /opt/app \
  -v $(pwd)/config:/opt/app/config.production:ro \
  node:13.6.0-stretch \
  bash

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



DOCKER_IMAGE_NAME=localhost-sequelize-tinker
docker build --no-cache -f Dockerfile.dev -t $DOCKER_IMAGE_NAME  .
docker run --rm -it $DOCKER_IMAGE_NAME sh -c "npx sequelize-cli db:migrate; npx sequelize-cli db:seed:all; npx sequelize-tinker"


docker run --rm -v $(pwd):/opt/app -it $DOCKER_IMAGE_NAME bash
```


### test
```shell script
npm install typescript --dev
npm install sequelize
npm install @types/sequelize
tsc
```

### Technical Stack
- NodeJS
- TypeScript
- Express
- Sequelize
- GraphQL
- Docker, docker-compose

### Installation
```sh
npm init -y
npm install typescript -s
tsc --init # change target to "es6"
mkdir -p src/

npm install express -s
npm install @types/express -s

# update package scripts (build and start)

npm install dotenv --save
touch ".env"

npm install --save sequelize
npm install --save sqlite3
```

### Docker
```bash
# prod
docker build --no-cache -t localhost-test .
docker run --rm -p 8080:8080 localhost-test

# dev
npm install && tsc
docker run --rm -it -p 8080:8080 -v $(pwd):/opt/app localhost-test sh -c  'npm run start'

# stop all container
docker stop $(docker ps -qa)
```

### 


### References
- unit test
- linter
- cs fixer
- [Sequelize Docs - official](https://sequelize.org/master/manual/models-usage.html)
- moment
- template engine
- i18n (ets)
- sequelize generate models file in typescript
```text
# 【工具推荐】使用husky 避免糟糕的git commit - 知乎
https://zhuanlan.zhihu.com/p/35913229


# github / maximegris / typescript-express-sequelize 
https://github.com/maximegris/typescript-express-sequelize
```
### Trapped
- [tsconfig](https://michalzalecki.com/using-sequelize-with-typescript/) -  that must be es6 or higher
- Typescript - npm install @types/package_name
- sequelize-cli - default load $NODE_ENV config
- [Dialect needs to be explicitly supplied as of v4.0.0](https://stackoverflow.com/questions/46694157/dialect-needs-to-be-explicitly-supplied-as-of-v4-0-0) - the error shown because cant reach config / using default environment
- [Error: Cannot find module node_modules/sqlite3/lib/binding/node-v57-linux-x64/node_sqlite3.node](https://github.com/mapbox/node-sqlite3/issues/906) - Cause the app cant load sqlite3. Solution 1, use node:v9 docker image. Solution 2, run `npm install -s sqlite3` in production image (works in node:v10, v12, v13).



typeorm, 17k star, 203,638 weekly downloads
Sequelize, 20.9k star, 468,363 weekly downloads
knex, 11.2k star, 410,580 weekly downloads
bookshelf, 5.8k star, 46,105 weekly downloads
dresende/node-orm2, 3k star, [discontinued]
SpoonX/wetland, 259  star, 166 weekly downloads

Awesome-Sequelize
- [sequelize-tinker](https://www.npmjs.com/package/sequelize-tinker)
- [github/sequelize/sequelize-auto](https://github.com/sequelize/sequelize-auto) - Automatically generate bare sequelize models from your database.


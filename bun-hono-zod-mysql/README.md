### app entry point
- depends on the run-time. Current code base on Bun.
https://hono.dev/api/hono#fetch
- work for JS - (src/test.js) or TS (src/index.ts)


### local dev
```shell
docker run --rm -it --name test-bun -v $(pwd)/src:/home/bun/app -p 3000:3000 oven/bun:1.0.3-debian bash
docker run --rm -it --name test-node -w /app -v $(pwd)/src:/app -p 3001:3000 node:20.8.0-bookworm bash

APP_ENV=development node index.js
PORT=12345 bun src/test.js



# test
curl localhost:3000
curl localhost:3000/ping
curl localhost:3000/health
curl localhost:3000/error
curl localhost:3000/env
curl -X POST localhost:3000/todo -F 'title=myTitleValue'
```


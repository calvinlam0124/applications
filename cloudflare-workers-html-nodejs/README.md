# Cloudflare Workers demo



### Objective
Deploy a single route application to Cloudflare Workers. And use docker to isolate local and deployment machine.


reference:
https://developers.cloudflare.com/workers/examples/read-post/

### Requirements
- Docker only


### Deploy
```shell
# run docker container for deployment
### expose port 8976 for wrangler login
### expose port 8787 for wrangler dev
### expose port 8788 for wrangler page dev $(pwd)
docker run --rm -it -p 8081:8787 -p 8082:8788 -p 8090:8976 -v $(pwd):/opt/app -w /opt/app node:20.3.1-bookworm-slim bash

# install wrangler cli
npm install wrangler
# login first, otherwise cloudflare-creation will fail
npx wrangler login
npm create cloudflare@latest cloudflare-works-html-nodejs
# choose => type "Hello World" Worker
# choose => no typescript
# choose => yes deploy via `npm run deploy`

# deploy - it will ask the cloudflare project (chose exist or create new one) and production branch name
npx wrangler deploy

# open browse to check the result
open ttps://project-name.username-ab1.workers.dev

```

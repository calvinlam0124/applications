### Commands for production
```sh
# build image
docker build -t DOCKER_IMAGE_NAME .
docker run --rm -p 8080:14321 DOCKER_IMAGE_NAME

# debug command
docker run --rm -it \
    -p 8080:14321 \
    -v $(pwd)/node_modules:/var/www/html/node_modules \
    -v $(pwd)/dist:/var/www/html/dist \
    -w /var/www/html/dist node:13.3.0-stretch \
    sh -c "node main.js"

# docker-compose
docker-compose build && docker-compose up
open http://localhost:8080
```

### Commands for development
```sh
# build image
docker build -f Dockerfile.dev -t DOCKER_IMAGE_TEST_NAME .
docker run --rm -p 8080:14321 DOCKER_IMAGE_TEST_NAME

# docker-composes
docker-compose -f docker-compose.dev.yml build
docker-compose -f docker-compose.dev.yml up
open http://localhost:8080

```

### Code
the code clone from typescript-starter and changed the PORT number as a variable.
```sh
git clone https://github.com/nestjs/typescript-starter.git code/
```
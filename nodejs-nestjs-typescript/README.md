### Usage
```sh
# build image
docker build -t DOCKER_IMAGE_NAME .
docker run --rm -p 8080:3000 DOCKER_IMAGE_NAME

# one time execution
docker run --rm -it \
    -p 8080:3000 \
    -v $(pwd)/node_modules:/var/www/html/node_modules \
    -v $(pwd)/dist:/var/www/html/dist \
    -w /var/www/html/dist node:13.3.0-stretch \
    sh -c "node main.js"

```
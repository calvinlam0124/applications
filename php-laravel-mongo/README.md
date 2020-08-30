### Usage
```sh
docker build -t localhost-test .
docker run -p 8080:80 localhost-test

# attach pwd to container
docker run -p 8080:80 -v $(pwd):/var/www/html localhost-test
```

### Usage
```sh

docker build --no-cache -t localhost-test .
docker run --rm -p 8080:8080 localhost-test

# troubleshoot
docker run --rm -v $(pwd):/opt/app -w /opt/app node:13.3.0-stretch sh -c "node --version; node index.js"
```
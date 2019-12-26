DOCKER_IMAGE_NAME=localhost-test

test:
	docker ps ; $(pwd)
dev:
	docker run --rm -v $(pwd):/opt/app -w /opt/app node:13.3.0-stretch sh -c "node --version; node index.js"
build:
	docker build --no-cache -t $(DOCKER_IMAGE_NAME) .
run:
	docker run --rm -p 8080:8080 $(DOCKER_IMAGE_NAME)
npm:
	npm install
node:
	node index.js

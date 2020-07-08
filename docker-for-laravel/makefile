build:
	docker-compose -f docker/docker-compose.yaml build
start:
	docker-compose -f docker/docker-compose.yaml up
app-bash:
	docker-compose -f docker/docker-compose.yaml exec app bash
db-bash:
	docker-compose -f docker/docker-compose.yaml exec db bash
node-bash:
	docker run --rm -it --name test-node -v $(pwd):/code -w /code node:12.16.1 bash

build:
	docker-compose -f docker/docker-compose.yaml --env-file=./docker/.env build
start:
	docker-compose -f docker/docker-compose.yaml --env-file=./docker/.env up --remove-orphans
config:
	docker-compose -f docker/docker-compose.yaml --env-file=./docker/.env config
app-bash:
	docker-compose -f docker/docker-compose.yaml --env-file=./docker/.env exec app bash
db-bash:
	docker-compose -f docker/docker-compose.yaml --env-file=./docker/.env exec db bash
node-bash:
	docker run --rm -it --name test-node -v $(pwd):/code -w /code node:12.16.1 bash

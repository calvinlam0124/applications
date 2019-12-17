### Technical Stack
- docker-compse
- php-fpm
- nginx

### Usage
```sh
docker-compose up
open http://localhost:8080
```


### without any Dockerfile
```docker-compose.yaml
version: '3'
services:
  nginx:
    image: nginx:1.17.6
    ports:
      - "8080:80"
    volumes:
      - ./nginx/default.conf:/etc/nginx/conf.d/default.conf
      - ./code:/code
  php-fpm:
    image: php:7.4.0-fpm-buster
    volumes:
        - ./code:/code
```
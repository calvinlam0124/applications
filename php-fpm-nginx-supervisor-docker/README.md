### Technical Stack
- php-fpm
- nginx
- supervisord

### Usage
```sh
# build and run
docker build -t container-image-name .
docker run --rm -it -p 8080:80 container-image-name
open http://localhost:8080

# troubleshoot
docker run --rm -it -p 8080:80 -v $(pwd)/code:/code -v $(pwd)/conf.d:/etc/nginx/conf.d container-image-name sh -c '/usr/bin/supervisord -n'

```
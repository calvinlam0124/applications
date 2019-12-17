FROM php:7.4.0-fpm-buster

RUN apt-get update && apt-get install -y \
    nginx \
    supervisor

COPY ./supervisord.conf /etc/supervisord.conf
COPY code /code
COPY conf.d /etc/nginx/conf.d

RUN mv "$PHP_INI_DIR/php.ini-production" "$PHP_INI_DIR/php.ini"

CMD ["/usr/bin/supervisord", "-n"]

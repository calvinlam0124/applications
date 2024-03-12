FROM php:8.3.4RC1-apache-bullseye
COPY . /var/www/html
COPY docker/apache2.000-default.conf /etc/apache2/sites-enabled/000-default.conf
RUN mv "$PHP_INI_DIR/php.ini-production" "$PHP_INI_DIR/php.ini"
RUN a2enmod rewrite
RUN chmod -R 777 /var/www/html/storage

FROM composer:1.9.1 as php-composer
COPY . /var/www/html
WORKDIR /var/www/html
RUN composer global require hirak/prestissimo
RUN composer install --ignore-platform-reqs

FROM php:7.4.0-apache
COPY . /var/www/html
COPY --from=php-composer /var/www/html/vendor /var/www/html/vendor
COPY apache2.000-default.conf /etc/apache2/sites-enabled/000-default.conf
RUN mv "$PHP_INI_DIR/php.ini-production" "$PHP_INI_DIR/php.ini"
RUN a2enmod rewrite
RUN chmod -R 777 /var/www/html/storage

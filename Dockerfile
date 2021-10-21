FROM composer as build

# Install composer
WORKDIR /var/www/html

ENV COMPOSER_HOME=/var/www/html
# Copy and runn composer
COPY composer.json /var/www/html
RUN composer install --no-scripts --no-autoloader
RUN composer dump-autoload --optimize

FROM wordpress:php7.4-apache
LABEL maintainer "Joonas Tikkanen <joonas.tikkanen@ambientia.fi>"

RUN apt-get update && \
    apt-get -y install wget unzip default-mysql-client less

# Copy httpd ports.conf
COPY conf/ports.conf /etc/apache2/ports.conf

# Copy themes and plugins
COPY -chown=33:33 wp-content/plugins /usr/src/wordpress/wp-content/plugins
COPY -chown=33:33 wp-content/themes /usr/src/wordpress/wp-content/themes
COPY --from=build --chown=33:33 /var/www/html/wp-content /usr/src/wordpress/wp-content
VOLUME /var/www/html/wp-content/uploads

# Install wp cli
RUN wget https://raw.githubusercontent.com/wp-cli/builds/gh-pages/phar/wp-cli.phar && chmod +x wp-cli.phar && mv wp-cli.phar /usr/local/bin/wp

COPY --chown=www-data:www-data docker-entrypoint.sh /usr/local/bin/

EXPOSE 8080
ENTRYPOINT ["docker-entrypoint.sh"]
CMD ["apache2-foreground"]

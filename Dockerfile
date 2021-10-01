FROM composer as build

# Install composer
WORKDIR /var/www/html/wp-content

ENV COMPOSER_HOME=/var/www/html
# Copy and runn composer
COPY composer.json /var/www/html/wp-content
RUN composer install --no-scripts --no-autoloader
RUN composer dump-autoload --optimize

FROM wordpress:php7.4-apache
LABEL maintainer "Joonas Tikkanen <joonas.tikkanen@ambientia.fi>"

RUN apt-get update && \
    apt-get -y install wget unzip default-mysql-client less

# Copy httpd ports.conf
COPY conf/ports.conf /etc/apache2/ports.conf

# Copy themes and plugins
COPY wp-content/plugins /usr/src/wordpress/wp-content/plugins
COPY wp-content/themes /usr/src/wordpress/wp-content/themes
COPY --from=build /var/www/html/wp-content /var/www/html/wp-content

VOLUME /var/www/html/wp-content/uploads

# Install wp cli
RUN wget https://raw.githubusercontent.com/wp-cli/builds/gh-pages/phar/wp-cli.phar && chmod +x wp-cli.phar && mv wp-cli.phar /usr/local/bin/wp

<<<<<<< HEAD
=======
WORKDIR /usr/src/wordpress
USER www-data
ENV COMPOSER_HOME=/usr/src/wordpress
RUN composer update && ls -lsa /usr/src/wordpress/wp-content/plugins 
USER root
RUN chown -R www-data:www-data /usr/src/wordpress && ls -lsa /usr/src/wordpress/wp-content/plugins
WORKDIR /var/www/html
>>>>>>> refs/remotes/origin/main
EXPOSE 8080

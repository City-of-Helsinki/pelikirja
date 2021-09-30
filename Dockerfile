FROM wordpress:php7.4-apache
LABEL maintainer "Joonas Tikkanen <joonas.tikkanen@ambientia.fi>"

ENV COMPOSER_HOME=/var/www/html

RUN apt-get update && \
    apt-get -y install libfreetype6 libfreetype6-dev wget unzip default-mysql-client less

COPY conf/ports.conf /etc/apache2/ports.conf

COPY composer.json /usr/src/wordpress

# Install Composer
RUN wget https://getcomposer.org/installer -O - -q | php -- && mv composer.phar /usr/local/bin/composer

WORKDIR /usr/src/wordpress

RUN composer update

COPY wp-content/plugins /usr/src/wordpress/wp-content/plugins
COPY wp-content/themes /usr/src/wordpress/wp-content/themes

VOLUME /var/www/html/wp-content/uploads

# Install wp cli

RUN wget https://raw.githubusercontent.com/wp-cli/builds/gh-pages/phar/wp-cli.phar && chmod +x wp-cli.phar && mv wp-cli.phar /usr/local/bin/wp

EXPOSE 8080

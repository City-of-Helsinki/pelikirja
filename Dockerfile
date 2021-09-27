FROM wordpress:5.7.2-php7.4-apache
LABEL maintainer "Joonas Tikkanen <joonas.tikkanen@ambientia.fi>"

RUN apt-get update && \
    apt-get -y install libfreetype6 libfreetype6-dev wget unzip default-mysql-client

COPY conf/ports.conf /etc/apache2/ports.conf

COPY composer.json /var/www/html
#COPY composer.lock /var/www/html

#WORKDIR /var/www/html

RUN curl -sS https://getcomposer.org/installer | php -- \
--install-dir=/usr/bin --filename=composer && chmod +x /usr/bin/composer 

RUN composer update

COPY wp-content/plugins /usr/src/wordpress/wp-content/plugins
COPY wp-content/themes /usr/src/wordpress/wp-content/themes

VOLUME /var/www/html/wp-content/uploads

# Install wp cli
RUN wget https://raw.githubusercontent.com/wp-cli/builds/gh-pages/phar/wp-cli.phar && chmod +x wp-cli.phar && mv wp-cli.phar /usr/local/bin/wp

EXPOSE 8080

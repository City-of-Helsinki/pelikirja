FROM wordpress:php7.4-apache
LABEL maintainer "Joonas Tikkanen <joonas.tikkanen@ambientia.fi>"

RUN apt-get update && \
    apt-get -y install wget unzip default-mysql-client less

COPY conf/ports.conf /etc/apache2/ports.conf

# Install Composer
RUN wget https://getcomposer.org/installer -O - -q | php -- && mv composer.phar /usr/local/bin/composer

COPY composer.json /usr/src/wordpress
COPY wp-content/plugins /usr/src/wordpress/wp-content/plugins
COPY wp-content/themes /usr/src/wordpress/wp-content/themes

VOLUME /var/www/html/wp-content/uploads

# Install wp cli
RUN wget https://raw.githubusercontent.com/wp-cli/builds/gh-pages/phar/wp-cli.phar && chmod +x wp-cli.phar && mv wp-cli.phar /usr/local/bin/wp

WORKDIR /usr/src/wordpress
USER www-data
ENV COMPOSER_HOME=/usr/src/wordpress
RUN composer update && ls -lsa /usr/src/wordpress/wp-content/plugins && chown -R www-data:www-data /usr/src/wordpress && ls -lsa /usr/src/wordpress/wp-content/plugins
USER root
WORKDIR /var/www/html
EXPOSE 8080
ENTRYPOINT ["bash", "-x", "docker-entrypoint.sh"]

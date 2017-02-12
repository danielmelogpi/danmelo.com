#!/bin/bash
echo "Instalando modulos NPM e Bower"

npm i
bower install

gulp production

export DEBUG="danmelo.com"
export env="production"
export PORT="80"

sudo nohup node bin/www
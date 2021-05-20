.SILENT:
.PHONY: build

###########
# Install #
###########

## Install dependencies
install:
	composer install
	npm install

###############
# Development #
###############

## Start dev server
start:
	symfony server:start --no-tls

## Watch assets
watch:
	npm run watch

## Start webpack dev server
dev:
	npm run dev-server

#########
# Build #
#########

## Build static site with assets
build: build-assets build-content

build-assets:
	npm run build

## Build static site
build-content: export APP_ENV = prod
build-content:
	bin/console cache:clear
	bin/console stenope:build

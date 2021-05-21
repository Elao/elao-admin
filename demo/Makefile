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

## Start both Symfony Web server & Webpack dev-server at once
start:
	# https://www.npmjs.com/package/concurrently
	npx concurrently "make serve" "make dev" --names="Symfony,Webpack" --prefix=name --kill-others --kill-others-on-fail

## Start dev server
serve:
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

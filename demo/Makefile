.SILENT:
.PHONY: build

###########
# Install #
###########

## Install dependencies
install: install.composer install.npm

install.npm:
	npm install --color=always

install.composer:
	symfony composer install

###############
# Development #
###############

## Start both Symfony Web server & Webpack dev-server at once
serve:
	# https://www.npmjs.com/package/concurrently
	npx concurrently "make serve.php" "make serve.assets" --names="Symfony,Webpack" --prefix=name --kill-others --kill-others-on-fail

## Start dev server
serve.php:
	symfony server:start --no-tls

## Start webpack dev server
serve.assets:
	npx encore dev-server --mode=development

## Watch assets
watch:
	npx encore dev --watch

#########
# Build #
#########

## Build static site with assets
build: build.assets build.content

build.assets:
	npx encore production --progress

## Build static site
build.content: export APP_ENV = prod
build.content:
	bin/console cache:clear
	bin/console stenope:build

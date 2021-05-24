.PHONY: build

#########
# Setup #
#########

install:
	npm install

#########
# Build #
#########

## Build assets
build:
	npm run build

## Build assets and watch
watch:
watch:
	npm run watch

# Lint and code style fix
lint:
	npm run fix

lint@integration:
	npm run lint

# Publish package
publish: build
	npm publish . --access public

########
# Demo #
########

demo-clear:
	rm -rf demo/build demo/public/build

demo-install:
	composer --working-dir=./demo install --no-progress --ansi
	cd demo && npm install --color=always --no-progress

## Simulates GH Pages deploy into a subdir / with base url
demo-build: export APP_ENV = prod
demo-build: export WEBPACK_PUBLIC_PATH = /elao-admin/build
demo-build: export ROUTER_DEFAULT_URI = http://localhost:8001/elao-admin
demo-build: install build demo-clear demo-install
	cd demo && npm run build
	demo/bin/console cache:clear
	demo/bin/console stenope:build build/elao-admin

## Serve the static version of the site from a subdir / with base url
serve-static-demo:
	open http://localhost:8001/elao-admin
	php -S localhost:8001 -t build

#########
# Fonts #
#########

FONTELLO_DIR   ?= ./vendor/fontello
FONTELLO_HOST  ?= http://fontello.com

fontello-pull:
	rm -rf .fontello.src .fontello.zip
	curl --silent --show-error --fail --output .fontello.zip \
		${FONTELLO_HOST}/`cat .fontello`/get
	unzip .fontello.zip -d .fontello.src
	rm -rf ${FONTELLO_DIR}
	mv `find ./.fontello.src -maxdepth 1 -name 'fontello-*'` ${FONTELLO_DIR}
	rm -rf .fontello.src .fontello.zip

fontello-push:
	curl --silent --show-error --fail --output .fontello \
		 --form "config=@${FONTELLO_DIR}/config.json" \
		 ${FONTELLO_HOST}
	open ${FONTELLO_HOST}/`cat .fontello`

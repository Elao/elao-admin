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

## Build assets
build@demo:
	npm run build@demo

## Watch assets and run server
start:
start:
	npm run start

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

#########
# Fonts #
#########

FONTELLO_DIR   ?= ./vendor/fontello
FONTELLO_HOST  ?= https://fontello.com

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

#########
# Setup #
#########

setup: install build

install:
	yarn install

##########
# Build #
##########

## Build assets
build:
	yarn encore dev

## Build assets and watch
watch:
	yarn encore dev --watch --watch-poll

#########
# Fonts #
#########

FONTELLO_DIR   ?= ./assets/vendor/fontello
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

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

.PHONY: build

#########
# Setup #
#########

install:
	npm install

## Serve - Watch for design system changes and serve the demo.
serve:
	npx concurrently "make watch" "cd demo && make serve" --names="Lib,Demo" --prefix=name --kill-others --kill-others-on-fail

## Serve - Watch for design system changes and serve the demo (assets only).
serve.assets:
	npx concurrently "make watch" "cd demo && make serve.assets" --names="Lib,Demo" --prefix=name --kill-others --kill-others-on-fail

#########
# Build #
#########

## Build assets
build:
	npx webpack --mode=production

## Build assets and watch
watch:
	npx webpack --mode=development --watch

# Lint and code style fix
lint: lint.fix

lint.fix:
	npx eslint src --ext .js --fix

lint.dry-run:
	npx eslint src --ext .js

lint@integration: lint.dry-run

# Publish package
publish: build
	npm publish . --access public

# Publish package
publish@beta: build
	npm publish . --access public --tag beta

########
# Demo #
########

demo.clear:
	rm -rf demo/build demo/public/build

demo.install:
	cd demo && make install

## Simulates GH Pages deploy into a subdir / with base url
demo.build: export APP_ENV = prod
demo.build: export WEBPACK_PUBLIC_PATH = /elao-admin/build
demo.build: export ROUTER_DEFAULT_URI = http://localhost:8001/elao-admin
demo.build: install build demo.clear demo.install
	cd demo && make build.assets
	cd demo && symfony console cache:clear
	cd demo && symfony console stenope:build build/elao-admin

## Serve the static version of the site from a subdir / with base url
serve.static-demo:
	open http://localhost:8001/elao-admin
	cd demo && php -S localhost:8001 -t build

#########
# Fonts #
#########

FONTELLO_DIR   ?= ./vendor/fontello
FONTELLO_HOST  ?= https://fontello.com

fontello.pull:
	rm -rf .fontello.src .fontello.zip
	curl --silent --show-error --fail --output .fontello.zip \
		${FONTELLO_HOST}/`cat .fontello`/get
	unzip .fontello.zip -d .fontello.src
	rm -rf ${FONTELLO_DIR}
	mv `find ./.fontello.src -maxdepth 1 -name 'fontello-*'` ${FONTELLO_DIR}
	rm -rf .fontello.src .fontello.zip

fontello.push:
	curl --silent --show-error --fail --output .fontello \
		 --form "config=@${FONTELLO_DIR}/config.json" \
		 ${FONTELLO_HOST}
	open ${FONTELLO_HOST}/`cat .fontello`

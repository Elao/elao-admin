# Elao admin

[Demo](https://elao.github.io/elao-admin/index.html)

## Requirements

* `node`
* `yarn`

## Setup

```
make setup
```

Open `public/index.html` in browser.

## Usage

Build assets

```
make build
```

Watch

```
make watch
```

Dev server

```
make start
```

Then go to [http://localhost:8080](http://localhost:8080)

## Fontello

`make fontello-push` will open your fontello project on http://fontello.com/.

Modify your font on http://fontello.com/ then click on "Save session".

`make fontello-pull` will download your modifications and update project files.

Commit the modifications.

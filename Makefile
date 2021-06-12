install:
	npm install

start:
	npm run start

build:
	npm run build

dev:
	npm run dev

server:
	npm run server

lint:
	npx eslint . --ext js,jsx
	npx stylelint **/*.scss

test:
	npm test -s

.PHONY: test server
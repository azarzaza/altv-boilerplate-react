install:
	cd ./resources/brp-base && yarn install
	cd ./resources/brp-base/client/src/views && yarn install

build:
	cd ./resources/brp-base && yarn install && yarn build

views:
	cd ./resources/brp-base/client/src/views && yarn install && yarn start

build-views:
	cd ./resources/brp-base/client/src/views && yarn install && yarn build

test-views:
	cd ./resources/brp-base/client/src/views && yarn install && yarn test

start:
	cd ./resources/brp-base && yarn install && yarn start

test:
	cd ./resources/brp-base && yarn install && yarn test

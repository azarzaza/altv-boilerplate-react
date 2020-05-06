install:
	cd ./resources/myresource && yarn install
	cd ./resources/myresource/client/src/views && yarn install

build:
	cd ./resources/myresource && yarn install && yarn build

views:
	cd ./resources/myresource/client/src/views && yarn install && yarn start

build-views:
	cd ./resources/myresource/client/src/views && yarn install && yarn build

test-views:
	cd ./resources/myresource/client/src/views && yarn install && yarn test

start:
	cd ./resources/myresource && yarn install && yarn start

test:
	cd ./resources/myresource && yarn install && yarn test

all: build

build: yaml2json updatedate buildcv
	npm run build

yaml2json:
	node ./buildscripts/yaml-to-json.js

updatedate: yaml2json
	node ./buildscripts/update-last-updated.js

buildcv: updatedate yaml2json
	node compile-cv.js

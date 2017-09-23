GOWDERIOTARGET = ${gowderiotarget}
PAULGOWDERCOMTARGET = ${paulgowdercomtarget}

all: deploy

deploy: build
	scp -r dist/static/ $(GOWDERIOTARGET)
	scp dist/index.html $(GOWDERIOTARGET)
	scp dist/index.html $(PAULGOWDERCOMTARGET)
	scp dist/index.html $(PAULGOWDERCOMTARGET)

build: yaml2json updatedate buildcv
	npm run build

yaml2json:
	node ./buildscripts/yaml-to-json.js

updatedate: yaml2json
	node ./buildscripts/update-last-updated.js

buildcv: updatedate yaml2json
	node compile-cv.js

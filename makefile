GOWDERIOTARGET = ${gowderiotarget}
PAULGOWDERCOMTARGET = ${paulgowdercomtarget}
GOWDERIO = ${gowderio}
PAULGOWDERCOM = ${paulgowdercom}
# I don't want to expose usernames and servers, set in env variable via api keys file

all: cleanup

cleanup: deploy
	python clearcloudflare.py

deploy: build
	ssh $(PAULGOWDERCOM) "rm -rf public_html/paul-gowder.com/static/" # cleanup old versions of compiled files
	ssh $(GOWDERIO) "rm -rf static/"
	scp -r dist/static/ $(GOWDERIOTARGET)
	scp dist/index.html $(GOWDERIOTARGET)
	scp -r dist/static/ $(PAULGOWDERCOMTARGET)
	scp dist/index.html $(PAULGOWDERCOMTARGET)

netlify: yaml2json updatedate buildpubliccv
	npm run build

build: yaml2json updatedate buildpubliccv buildprivatecv
	npm run build

local: yaml2json updatedate buildpubliccv buildprivatecv
	npm run dev

yaml2json:
	node ./buildscripts/yaml-to-json.js

updatedate: yaml2json
	node ./buildscripts/update-last-updated.js

buildpubliccv: updatedate yaml2json
	node ./buildscripts/compile-public-cv.js

buildprivatecv: updatedate yaml2json
	node ./buildscripts/compile-private-cv.js

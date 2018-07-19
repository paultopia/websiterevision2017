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

build: yaml2json updatedate buildcv
	npm run build

yaml2json:
	node ./buildscripts/yaml-to-json.js

updatedate: yaml2json
	node ./buildscripts/update-last-updated.js

buildcv: updatedate yaml2json
	node ./buildscripts/compile-cv.js

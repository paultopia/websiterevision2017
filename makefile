GOWDERIOTARGET = ${gowderiotarget}
PAULGOWDERCOMTARGET = ${paulgowdercomtarget}
GOWDERIO = ${gowderio}
PAULGOWDERCOM = ${paulgowdercom}
# I don't want to expose usernames and servers, set in env variable via api keys file

all: log

log: deploy
	python clear_cache_and_log.py

deploy: build
	ssh $(PAULGOWDERCOM) "rm -rf public_html/paul-gowder.com/static/" # cleanup old versions of compiled files
	ssh $(GOWDERIO) "rm -rf static/"
	scp -r dist/static/ $(GOWDERIOTARGET)
	scp dist/index.html $(GOWDERIOTARGET)
	scp -r dist/static/ $(PAULGOWDERCOMTARGET)
	scp dist/index.html $(PAULGOWDERCOMTARGET)
	scp square.jpg $(GOWDERIOTARGET)

# Netlify doesn't support LaTeX builds, so I'll have to rely on local build for this and can't really do prod.
netlify: buildcvfornetlify
	npm run build

buildcvfornetlify: templatecvfornetlify
  cp currentcv.tex cvtex/currentcv.tex
	bash texbuild_for_netlify/build.sh cvtex/currentcv.tex

templatecvfornetlify: yaml2json updatedate
	node ./buildscripts/template-public-cv.js

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


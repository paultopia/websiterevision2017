# Netlify functionality

netlify: buildjsnetlify buildcljsnetlify
	cp -r swap_in/* dist
	cp currentcv.pdf dist/gowdercv.pdf

buildcljsnetlify:
	cd apps/apps && lein package
	cp -r apps/apps/public/. swap_in/apps

buildjsnetlify: buildcvnetlify
	npm run build

buildcvnetlify: templatecvnetlify
	cp -R cvtex/. .
	cp -R texbuild_for_netlify/. .
	bash build.sh currentcv.tex
	cp currentcv.pdf src/assets/pdf/gowdercv.pdf

templatecvnetlify: yaml2json updatedate
	node ./buildscripts/template-public-cv.js

# Local functionality

local: cvbuild
	npm run build

dev: cvbuild
	npm run dev

yaml2json:
	node ./buildscripts/yaml-to-json.js

updatedate: yaml2json
	node ./buildscripts/update-last-updated.js

cvbuild: updatedate yaml2json
	node ./buildscripts/template-public-cv.js
	cp -r cvtex temp_cv_build
	cp currentcv.tex temp_cv_build
	cd temp_cv_build && xelatex currentcv.tex
	cp temp_cv_build/currentcv.pdf .
	rm -rf temp_cv_build

buildpubliccv: updatedate yaml2json
	node ./buildscripts/compile-public-cv.js

buildprivatecv: updatedate yaml2json
	node ./buildscripts/compile-private-cv.js

fancy_local: yaml2json updatedate buildpubliccv buildprivatecv
	npm run build

fancy_dev: yaml2json updatedate buildpubliccv buildprivatecv
	npm run dev

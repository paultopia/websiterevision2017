# websiterevision2017

> Revision of personal website in 2017, with vue and all that jazz.

Soon to be live on staging/alt website (http://gowder.io)



TODO: 

needs to have cv building integrated into overall build script.

also needs to replace JSON with YAML for much easier editing.

and change the headline?

and make forward button work?

---- 

## garbage that can be ignored, some auto-generated

### Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

----

# Notes

This is a total re-scaffold of what was previously at paulgowdercom/revision, to take advantage of fancy vue cli/webpack tricks. 

Right now, it won't compile.  I need to change all the paths to match new directory structure. Mostly that means everything in assets.  I also need to make sure all imports are correct---might be easiest just to register everything as a global component.

Tasks before it will compile

[x] integrate old_main.js and new main.js

[x] go through every component and get assets to right paths (make a reasonable structure for assets directory, like /css /images /pdf /json /md etc.)

[x] rewrite icons to just use raw svg.  getting rid of vue-awesome, don't need it.

[x] get rid of all css imports.  it'll be per component henceforth and any global files in root component per suggestions in http://vuejs-templates.github.io/webpack/pre-processors.html.

[x] change cv pdf build script to make cv build in assets

[ ] integrate cv pdf building into npm script for prod/dev.

[x] look into requiring littlenav globally.  it's all over the place right now, wouldn't surprise me if that's dumping a bunch of extra code in bundle or something stupid.

[x] fix all the bugs that this process will introduce.

Then it should build, but will look ugly because I'm also dumping the old CSS. Next task is to rewrite the css. See layout-experiments from old repo for the start of a design for palm pilot look with flexbox.

----

(now done.  next step, write the css.  oh, and the rest of the content.  The basic functionality is finished, so long as it compiles properly for build.)

(builds successfully, however, limited CSS I have in here works differently on prod build than on dev build.  I think in-component CSS is running into one another.  I could use scoped CSS, but would be better to use proper classes. https://vue-loader.vuejs.org/en/features/scoped-css.html )

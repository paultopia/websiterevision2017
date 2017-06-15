# websiterevision2017

> Revision of personal website in 2017, with vue and all that jazz.

## Build Setup

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

[ ] integrate old_main.js and new main.js

[ ] go through every component and get assets to right paths (make a reasonable structure for assets directory, like /css /images /pdf /json /md etc.)

[ ] just register all components globally (like vue-awesome icons were in original) to simplify.  I don't have enough components to make the alternative worth the time.

[ ] rewrite icons to just use raw svg.  getting rid of vue-awesome, don't need it.

[ ] get rid of all css imports.  it'll be per component henceforth.

[ ] change cv build script to make cv build in assets

Then it should build, but will look ugly because I'm also dumping the old CSS. Next task is to rewrite the css. See layout-experiments from old repo for the start of a design for palm pilot look with flexbox.

----

with new cli scaffold it seems to work this way with assets, rather than shoving into state? 

    <img src="./assets/logo.png">
    <hello></hello>

that is, web pack grabs things from the assets file, compiles them into js, but also lets you use original urls.?!  nice. 

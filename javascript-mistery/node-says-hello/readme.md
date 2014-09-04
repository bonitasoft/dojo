# The aim.
Setup a developpement envirronement.

What do you need.
 - Node + NPM
 - Karma = npm install karma
 - chai
 - cowsay

> npm init

# First things first. Test!

## Install karma
> npm install karma

## Setup karma
> node_modules/karma/bin/karma init

Files patterns:
 - src/js/**/*.js
 - src/test/**/*.js

## Install chai.js
> npm install karma-chai karma-jasmine --save-dev

Have a look at node_modules & check out devDependencies in package.json

Update karma.conf.js to make chai avalaible for our tests.
frameworks: ['jasmine', 'chai'],

## Start karma
> node_modules/karma/bin/karma start karma.conf.js

Ouch, Missing Chrome stuff??

> npm search karma chrome

ok, let's add it

> npm install karma-chrome-launcher --save-dev

# Let's play with the script.

> node main.js

Hum.. something seems broken. Yeah there is a dependence on this awesome lib called cowsay!
We should install that.

> npm install cowsay --save

> node main.js

B-)
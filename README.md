# Sample setup with Piral instance and Angular Pilet using webpack 5 as a bundler

## Description

This project includes a minimum piral instance providing Angular and a sample angular-pilet with some nested routing using child routes.

## Setup project

1. go to `piral-debug-webpack5` and run `npm install`
1. build emulator by running `piral build --type emulator`
1. go to `pilet-angular-webpack5` and run `npm install`
1. run `npm run start`
1. open browser at `http://localhost:1234`
1. press the 'To Sharing' link

## Expected behavior
Navigation is only executed 15 times

## Actual behavior
Navigation is executed way more often. It seems it is realted to the computing power of the machine. On faster machine it is way more unlikely to occur and also it resolve faster, after fewer navigations.

![navigation_storm.gif](https://github.com/LBraeschke/piral-angular-nav-loop-bug/navigation_storm.gif)

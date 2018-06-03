<p align="center">
  <img height="256px" width="256px" style="text-align: center;" src="https://cdn.rawgit.com/angular-material-extensions/jumbotron/master/demo/src/assets/logo.svg">
</p>

# jumbotron - Angular UI open source library built with material design in order to illustrate a highlighted/important information for the user

[![npm version](https://badge.fury.io/js/jumbotron.svg)](https://badge.fury.io/js/jumbotron),
[![Build Status](https://travis-ci.org/angular-material-extensions/jumbotron.svg?branch=master)](https://travis-ci.org/angular-material-extensions/jumbotron)
[![Coverage Status](https://coveralls.io/repos/github/angular-material-extensions/jumbotron/badge.svg?branch=master)](https://coveralls.io/github/angular-material-extensions/jumbotron?branch=master)
[![dependency Status](https://david-dm.org/angular-material-extensions/jumbotron/status.svg)](https://david-dm.org/angular-material-extensions/jumbotron)
[![devDependency Status](https://david-dm.org/angular-material-extensions/jumbotron/dev-status.svg?branch=master)](https://david-dm.org/angular-material-extensions/jumbotron#info=devDependencies)
[![Greenkeeper Badge](https://badges.greenkeeper.io/angular-material-extensions/jumbotron.svg)](https://greenkeeper.io/)

## Demo

View all the directives in action at https://angular-material-extensions.github.io/jumbotron

## Dependencies
* [Angular](https://angular.io) (*requires* Angular 2 or higher, tested with 2.0.0)

## Installation
Install above dependencies via *npm*. 

Now install `jumbotron` via:
```shell
npm install --save jumbotron
```

---
##### SystemJS
>**Note**:If you are using `SystemJS`, you should adjust your configuration to point to the UMD bundle.
In your systemjs config file, `map` needs to tell the System loader where to look for `jumbotron`:
```js
map: {
  'jumbotron': 'node_modules/jumbotron/bundles/jumbotron.umd.js',
}
```
---

Once installed you need to import the main module:
```js
import { LibModule } from 'jumbotron';
```
The only remaining part is to list the imported module in your application module. The exact method will be slightly
different for the root (top-level) module for which you should end up with the code similar to (notice ` LibModule .forRoot()`):
```js
import { LibModule } from 'jumbotron';

@NgModule({
  declarations: [AppComponent, ...],
  imports: [LibModule.forRoot(), ...],  
  bootstrap: [AppComponent]
})
export class AppModule {
}
```

Other modules in your application can simply import ` LibModule `:

```js
import { LibModule } from 'jumbotron';

@NgModule({
  declarations: [OtherComponent, ...],
  imports: [LibModule, ...], 
})
export class OtherModule {
}
```

## Usage



## License

Copyright (c) 2018 Anthony Nahas. Licensed under the MIT License (MIT)


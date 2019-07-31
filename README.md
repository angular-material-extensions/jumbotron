<p align="center">
  <img height="256px" width="256px" style="text-align: center;" src="https://cdn.rawgit.com/angular-material-extensions/jumbotron/master/demo/src/assets/logo.svg">
</p>

# jumbotron - Angular UI open source library built with material design in order to illustrate a highlighted/important information for the user - Angular 8 supported

[![npm version](https://badge.fury.io/js/%40angular-material-extensions%2Fjumbotron.svg)](https://badge.fury.io/js/%40angular-material-extensions%2Fjumbotron)
[![npm demo](https://img.shields.io/badge/demo-online-ed1c46.svg)](https://angular-material-extensions.github.io/jumbotron)
[![Join the chat at https://gitter.im/angular-material-extensions/Lobby](https://badges.gitter.im/angular-material-extensions/Lobby.svg)](https://gitter.im/angular-material-extensions/Lobby?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)
[![CircleCI branch](https://img.shields.io/circleci/project/github/angular-material-extensions/jumbotron/master.svg?label=circleci)](https://circleci.com/gh/angular-material-extensions/jumbotron)
[![Coverage Status](https://coveralls.io/repos/github/angular-material-extensions/jumbotron/badge.svg?branch=master)](https://coveralls.io/github/angular-material-extensions/jumbotron?branch=master)
[![dependency Status](https://david-dm.org/angular-material-extensions/jumbotron/status.svg)](https://david-dm.org/angular-material-extensions/jumbotron)
[![devDependency Status](https://david-dm.org/angular-material-extensions/jumbotron/dev-status.svg?branch=master)](https://david-dm.org/angular-material-extensions/jumbotron#info=devDependencies)
[![Greenkeeper Badge](https://badges.greenkeeper.io/angular-material-extensions/jumbotron.svg)](https://greenkeeper.io/)
[![license](https://img.shields.io/github/license/angular-material-extensions/jumbotron.svg?style=flat-square)](https://github.com/angular-material-extensions/jumbotron/blob/master/LICENSE)


<p align="center">
  <img alt="@angular-material-extensions/faq" style="text-align: center;"
   src="https://raw.githubusercontent.com/angular-material-extensions/jumbotron/HEAD/assets/demo.png">
</p>


## Built by and for developers :heart:
Do you have any question or suggestion ? Please do not hesitate to contact us!
Alternatively, provide a PR | open an appropriate issue [here](https://github.com/angular-material-extensions/jumbotron/issues)

If you like this project, support [angular-material-extensions](https://github.com/angular-material-extensions) 
by starring :star: and sharing it :loudspeaker:


## Table of Contents
- [Demo](#demo)
- [Dependencies](#dependencies)
- [Peer Dependencies](#peerDependencies)
- [Additional Requirements - material (Include a theme)](#additional-requirements-material-theme)
- [Additional Requirements - material icons](#additional-requirements-material-icons)
- [Installation](#installation)
- [Usage](#usage)
- [Documentation](#documentation)
- [Run Demo App Locally](#run-demo-app-locally)
- [Development](#development)
- [Other Angular Libraries](#other-angular-libraries)
- [Support](#support)
- [License](#license)


---

<a name="demo"/>

## [Demo](https://angular-material-extensions.github.io/jumbotron)

View all the directives and components in action at [https://angular-material-extensions.github.io/jumbotron](https://angular-material-extensions.github.io/jumbotron)

<a name="dependencies"/>

## Dependencies
* [Angular](https://angular.io) (*requires* Angular 2 or higher)

<a name="peerDependencies"/>

### Requirements (peer dependencies):
- [angular flex-layout v8.0.0-beta.26](https://www.npmjs.com/package/@angular/flex-layout)
- [angular material v8.x](https://www.npmjs.com/package/@angular/material)
- [angular cdk v8.x](https://www.npmjs.com/package/@angular/cdk)
- [angular animations v8.x](https://www.npmjs.com/package/@angular/animations)

```bash
npm i @angular/cdk @angular/material @angular/flex-layout @angular/animations 
```

---

<a name="additional-requirements-material-theme"/>

### Additional requirements Theme (Material Design)
- [angular material theme](https://material.angular.io/guide/getting-started#step-4-include-a-theme)

<a name="additional-requirements-material-icons"/>

## Additional Requirements - Import the material design icons [learn more](https://material.angular.io/guide/getting-started#step-6-optional-add-material-icons)

- The easiest way to import material design icons is to provide a link in your `index.html` file like below:

```html
<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
```

- alternative solution:

1. Install of the official npm module of the material design icons

```bash
npm i -s material-design-icons
```

2. Import them in your `angular.json` file

```json
"styles": [
        "styles.css",
        "../node_modules/material-design-icons/iconfont/material-icons.css"
      ],
```  


----

<a name="installation"/>

##  [Installation](https://angular-material-extensions.github.io/jumbotron/getting-started)

Install above dependencies via *npm*. 

Now install `@angular-material-extensions/jumbotron` via:
```shell
npm install --save @angular-material-extensions/jumbotron
```

---
##### SystemJS
>**Note**:If you are using `SystemJS`, you should adjust your configuration to point to the UMD bundle.
In your systemjs config file, `map` needs to tell the System loader where to look for `jumbotron`:
```js
map: {
  'jumbotron': 'node_modules/@angular-material-extensions/jumbotron/bundles/jumbotron.umd.js',
}
```
---

Once installed you need to import the main module:
```js
import { MatJumbotronModule } from '@angular-material-extensions/jumbotron';
```
The only remaining part is to list the imported module in your application module. The exact method will be slightly
different for the root (top-level) module for which you should end up with the code similar to (notice ` MatJumbotronModule.forRoot()`):
```js
import { MatJumbotronModule } from '@angular-material-extensions/jumbotron';

@NgModule({
  declarations: [AppComponent, ...],
  imports: [MatJumbotronModule.forRoot(), ...],  
  bootstrap: [AppComponent]
})
export class AppModule {
}
```

Other modules in your application can simply import ` MatJumbotronModule `:

```js
import { MatJumbotronModule } from '@angular-material-extensions/jumbotron';

@NgModule({
  declarations: [OtherComponent, ...],
  imports: [MatJumbotronModule, ...], 
})
export class OtherModule {
}
```

<a name="usage"/>

## [Usage](https://angular-material-extensions.github.io/jumbotron/getting-started)

- `mat-jumbotron` a material card layout that holds (optional) an image and the content of the `mat-jumbotron-content`
- `mat-jumbotron-content` is the main content of the **jumbotron** and can contains anything! It's your template

### Example

```html
<mat-jumbotron imgURL="assets/logo.svg">
  <mat-jumbotron-content>
    <h1 class="display-1" ngClass.xs="display-3 text-center" ngClass.sm="display-3">jumbotron</h1>
    <p class="headline" ngClass.xs="text-center">Angular UI open source library built
      with material design in order to illustrate a highlighted/important information for the user
    </p>

    <p class="text-center"> Scroll down to see it in action!</p>

    <div fxLayout="row" fxLayout.xs="column"
         fxLayoutGap.xs="1rem"
         fxLayoutAlign="center center">
      <a mat-stroked-button
         color="primary"
         target="_blank"
         href="https://github.com/angular-material-extensions/jumbotron">
        <mat-icon>code</mat-icon>
        Code on Github
      </a>
      <a mat-stroked-button
         color="primary"
         target="_blank"
         href="doc/index.html">
        <mat-icon>note</mat-icon>
        Documentation
      </a>
    </div>

  </mat-jumbotron-content>
</mat-jumbotron>
```

the result will be the screen shot displayed above!
For a live example, please visit the [Demo App](https://angular-material-extensions.github.io/jumbotron)

### API

### `mat-jumbotron` 

| option | bind  |  type  |   default    | description  |
|:-------------------|:--------:|:------:|:------------:|:-------------------------------------------------------------------------------------------------|    
| imageURL           | Input()  | string    | - |  the image src url to be displayed in the jumbotron


### Example

<a name="documentation"/>

## [Documentation](https://angular-material-extensions.github.io/jumbotron/doc/index.html)

Please checkout the full documentation [here](https://angular-material-extensions.github.io//jumbotron/doc/index.html) 
or follow the official [tutorial](https://angular-material-extensions.github.io//jumbotron/getting-started)

<a name="run-demo-app-locally"/>

## Run Demo App Locally

- [clone this repo](https://github.com/angular-material-extensions/jumbotron.git) by running
```bash
$ git clone https://github.com/angular-material-extensions/jumbotron.git
```

- link the **@angular-material-extensions/jumbotron** package
use gulp globally
```bash
$ gulp link
```

use gulp locally
```bash
$ npx gulp link
```
for some mac os users, you may use the sudo command with gulp
use gulp with sudo
```bash
$ sudo gulp link
```
or locally 
```bash
$ sudo npx gulp link
```

- navigate to the demo app directory
```bash
$ cd demo
```

- install the dependencies
```bash
$ npm i
```

- run/start/serve the app
```bash
$ npm run start
```
or
```bash
$ ng serve --open
```
- the app is now hosted by `http://localhost:4200/`


<a name="development"/>

## Development

1. clone this [repo](https://github.com/angular-material-extensions/jumbotron.git)
2. Install the dependencies by running `npm i`
3. build the library `npm run build` or `gulp build`
To generate all `*.js`, `*.d.ts` and `*.metadata.json` files:

```bash
$ npm run build
```

4. Link the library 
  - on windows `gulp link` or locally `npx gulp link`
  - on mac/linux `sudo gulp link` or locally `sudo npx gulp link`
  
 5. Navigate to the demo app's directory
  - `cd demo`
  _ `npm i`
  _ `npm start`

extras
To lint all `*.ts` files:

```bash
$ npm run lint
```

---

<a name="other-angular-libraries"/>

## Other Angular Material Extensions Libraries
- [ngx-auth-firebaseui](https://github.com/AnthonyNahas/ngx-auth-firebaseui)
- [ngx-linkifyjs](https://github.com/anthonynahas/ngx-linkifyjs)
- [@angular-material-extensions/components](https://github.com/angular-material-extensions/components)
- [@angular-material-extensions/password-strength](https://github.com/angular-material-extensions/password-strength)
- [@angular-material-extensions/google-maps-autocomplete](https://github.com/angular-material-extensions/google-maps-autocomplete)
- [@angular-material-extensions/pages](https://github.com/angular-material-extensions/pages)
- [@angular-material-extensions/link-preview](https://github.com/angular-material-extensions/link-preview)
- [@angular-material-extensions/faq](https://github.com/angular-material-extensions/faq)
- [@angular-material-extensions/contacts](https://github.com/angular-material-extensions/contacts)
- [angular-material-extensions/freelancer-theme](https://github.com/angular-material-extensions/freelancer-theme)
- [@angular-material-extensions/combination-generator](https://github.com/angular-material-extensions/combination-generator)

---

<a name="support"/>

## Support
+ Drop an email to: [Anthony Nahas](mailto:anthony.na@hotmail.de)
+ or open an appropriate [issue](https://github.com/angular-material-extensions/jumbotron/issues)
+ let us chat on [Gitter](https://gitter.im/angular-material-extensions/Lobby)
 
 Built by and for developers :heart: we will help you :punch:

---

## License

Copyright (c) 2019 [Anthony Nahas](https://github.com/AnthonyNahas). Licensed under the MIT License (MIT)


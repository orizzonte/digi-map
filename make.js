#!/usr/bin/env node
/*eslint no-console: 0, no-sync: 0*/
'use strict';

// .js bundler
// simple and yet reusable .js bundler
// bundles, minifies and gzips

const fs = require('fs');
const del = require('del');
const path = require('path');
const zlib = require('zlib');
const async = require('async');
const Builder = require('systemjs-builder');

const pkg = require('./package.json');
const name = pkg.name;
const targetFolder = 'bundles';
const configFolder = 'config';

async.waterfall([
  cleanBundlesFolder,
  getJsBundleConfig,
  buildJs({}),
  getJsBundleConfig,
  buildJs({ minify: true, sourceMaps: true }),
  //gzipJsBundle,
  copyEsriConfig
], function (err) {
  if (err) {
    throw err;
  }
});

function getJsBundleConfig(cb) {
  let config = {
    "defaultJSExtensions": true,
    // baseURL: '..',
    // transpiler: 'typescript',
    // typescriptOptions: {
    //   module: ''
    // },
     paths: {
      // paths serve as alias
      'npm:': 'node_modules/'
    },
    map: {
       'digi-map/digi-map': './digi-map.js',
      '@angular/core': 'npm:@angular/core/bundles/core.umd.js',
      '@angular/common': 'npm:@angular/common/bundles/common.umd.js',
      '@angular/compiler': 'npm:@angular/compiler/bundles/compiler.umd.js',
      '@angular/platform-browser': 'npm:@angular/platform-browser/bundles/platform-browser.umd.js',
      '@angular/platform-browser-dynamic': 'npm:@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
      '@angular/http': 'npm:@angular/http/bundles/http.umd.js',
      '@angular/router': 'npm:@angular/router/bundles/router.umd.js',
      '@angular/forms': 'npm:@angular/forms/bundles/forms.umd.js',
      'rxjs':                      'npm:rxjs',
      typescript: 'npm:typescript/lib/typescript.js',   
      lodash: 'npm:lodash/lodash.min.js',
      "esri-mods": 'empty.js',
      "ng2-bootstrap/ng2-bootstrap": 'npm:ng2-bootstrap/ng2-bootstrap.js'
    },
     // packages tells the  loader how to load when no filename and/or no extension
    packages: {       
      rxjs: {
        defaultExtension: 'js'
      },
      'digi-map/digi-map': {
          defaultExtension: 'js'
      }
    }


  };
  
  config.meta = ['@angular', 'rxjs'].reduce((memo, currentValue) => {
    memo[`${name}/node_modules/${currentValue}/*`] = { build: false };
    return memo;
  }, {});
  return cb(null, config);
}

function cleanBundlesFolder(cb) {
  return del(targetFolder)
    .then((paths) => {
      console.log('Deleted files and folders:\n', paths.join('\n'));
      cb();
    });
}

function buildJs(options) {
  return function (config, cb) {
    let fileName = name + (options && options.minify ? '.min' : '') + '.js';
    let dest = path.resolve(__dirname, targetFolder, fileName);
    console.log('Bundling .js file:', fileName, options);

    let builder = new Builder();
    builder.config(config);
    return builder
      .bundle([name, name].join('/'), dest, options)
      .then(() => cb()).catch(cb);
  };
}

// function gzipJsBundle(cb) {
//   var files = fs.readdirSync(path.resolve(targetFolder))
//     .map(file => path.resolve(targetFolder, file))
//     .filter(file => fs.statSync(file).isFile())
//     .filter(file => path.extname(file) !== 'gz');
//   return async.eachLimit(files, 1, (file, gzipcb) => {
//     process.nextTick(() => {
//       console.log('Gzipping ', file);
//       const gzip = zlib.createGzip({ level: 9 });
//       let inp = fs.createReadStream(file);
//       let out = fs.createWriteStream(file + '.gz');
//       inp.on('end', () => gzipcb());
//       inp.on('error', err => gzipcb(err));
//       return inp.pipe(gzip);
//     });
//   }, cb);
// }

function copyEsriConfig(cb) {
  let configFile = 'digi-map.config.js';
  console.log('copying: ' + configFolder + '/' + configFile);
  let inp = fs.createReadStream(configFolder + '/' + configFile);
  return inp.pipe(fs.createWriteStream(targetFolder + '/' + configFile));
}

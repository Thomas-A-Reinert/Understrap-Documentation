// package metadata file for Meteor.js

/* global Package:true */

Package.describe({
  name: 'UnderStrap',  // https://atmospherejs.com/twbs/bootstrap
  summary: 'A WordPress theme framework based on Bootstrap4 and _s',
  version: '0.8.2',
  git: 'https://github.com/understrap/understrap.git'
});

Package.onUse(function (api) {
  api.versionsFrom('METEOR@1.0');
  api.use('jquery', 'client');
  api.addFiles([
    'dist/css/bootstrap.css',
    'dist/js/bootstrap.js'
  ], 'client');
});

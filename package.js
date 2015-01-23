Package.describe({
  name: '3stack:bootbox',
  version: '4.3.0-1',
  summary: 'https://github.com/makeusabrew/bootbox',
  git: 'https://github.com/3stack-software/meteor-bootbox',
  documentation: 'README.md'
});

Package.onUse(function (api) {
  api.versionsFrom('METEOR@0.9.2');

  api.export('bootbox', 'client');
  api.use('jquery', 'client');
  api.addFiles('bootbox.js', "client");
});

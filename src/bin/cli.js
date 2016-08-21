#!/usr/bin/env node

'use strict';

var yargs = require('yargs')
  .usage('Usage: $0 [--random] [--all] [-?, --help]')
  .option('random', {describe: 'Random princess name'})
  .option('all', {describe: 'All princess names'})
  .help('?')
  .alias('?', 'help');

var argv = yargs.argv;

var princessNames = require('../lib/index.js');

if (argv.random) {
  console.log(princessNames.random());
} else if (argv.all) {
  console.log(princessNames.all.join('\n'));
} else {
  yargs.showHelp();
}

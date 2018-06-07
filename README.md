Princess Names
==============

[![Build Status][travis-image]][travis-url]
[![Coverage Status][coveralls-image]][coveralls-url]
[![Dependency Status][daviddm-image]][daviddm-url]
[![NPM version][npm-image]][npm-url]


Get popular Princess names

Install
-------

```bash
$ npm install --save princess-names
```

Usage
-----

```js
var princessNames = require('princess-names');

princessNames.random();
//=> 'Zelda'
```

API
---

### .all

Type: `array`

Get all Princess names.

### .random()

Type: `function`

Random Princess name.

Command Line
------------

```bash
$ npm install -g princess-names
```

```bash
$ princess-names --help

Usage: princess-names [--random] [--all] [-?, --help]

Options:
  --random    Random princess name
  --all       All princess names
  -?, --help  Show help
```

License
-------

The MIT License (MIT)

[npm-image]: https://img.shields.io/npm/v/princess-names.svg
[npm-url]: https://www.npmjs.com/package/princess-names
[travis-image]: https://travis-ci.org/williambelle/princess-names.svg?branch=master
[travis-url]: https://travis-ci.org/williambelle/princess-names
[coveralls-image]: https://coveralls.io/repos/github/williambelle/princess-names/badge.svg
[coveralls-url]: https://coveralls.io/github/williambelle/princess-names
[daviddm-image]: https://david-dm.org/williambelle/princess-names/status.svg
[daviddm-url]: https://david-dm.org/williambelle/princess-names

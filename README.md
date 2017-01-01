Princess Names
==============

[![Build Status][travis-image]][travis-url]
[![Coverage Status][coveralls-image]][coveralls-url]
[![Dependency Status][gemnasium-image]][gemnasium-url]
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
```

API
---

### .all

Type: `array`

Get all Princess names

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

MIT License

Copyright (c) 2016 William Belle

[npm-image]: https://img.shields.io/npm/v/princess-names.svg
[npm-url]: https://www.npmjs.com/package/princess-names
[travis-image]: https://travis-ci.org/williambelle/princess-names.svg?branch=master
[travis-url]: https://travis-ci.org/williambelle/princess-names
[coveralls-image]: https://coveralls.io/repos/github/williambelle/princess-names/badge.svg
[coveralls-url]: https://coveralls.io/github/williambelle/princess-names
[gemnasium-image]: https://gemnasium.com/badges/github.com/williambelle/princess-names.svg
[gemnasium-url]: https://gemnasium.com/github.com/williambelle/princess-names

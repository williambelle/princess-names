princess-names
==============

[![Build Status][github-actions-image]][github-actions-url]
[![Coverage Status][coveralls-image]][coveralls-url]
[![Dependencies Status][librariesio-image]][librariesio-url]
[![NPM version][npm-image]][npm-url]

Get popular Princess names.

Command Line
------------

### Install

Install this globally and you'll have access to the `princess-names` command
anywhere on your system.

```bash
npm i princess-names -g
```

### Usage

```console
princess-names
Usage: princess-names [--random] [--all] [-?, --help]

Options:
  --version   Show version number                      [boolean]
  --random    Random princess name
  --all       All princess names
  -?, --help  Show help                                [boolean]
```

See [docs/list.md](docs/list.md)

API
---

### Install

```bash
npm i princess-names
```

### Usage

```javascript
const princessNames = require('princess-names');

console.log(princessNames.random());
console.log(princessNames.all.join('\n'));
```

### .all

Type: `array`

Get all Princess names.

### .random()

Type: `function`

Random Princess name.

Contributing
------------

Contributions are always welcome.

See [Contributing](CONTRIBUTING.md).

Developer
---------

* [William Belle](https://github.com/williambelle)

License
-------

The MIT License (MIT)

[npm-image]: https://img.shields.io/npm/v/princess-names.svg
[npm-url]: https://www.npmjs.com/package/princess-names
[github-actions-image]: https://github.com/williambelle/princess-names/workflows/Build/badge.svg
[github-actions-url]: https://github.com/williambelle/princess-names/actions
[coveralls-image]: https://coveralls.io/repos/github/williambelle/princess-names/badge.svg
[coveralls-url]: https://coveralls.io/github/williambelle/princess-names
[librariesio-image]: https://img.shields.io/librariesio/release/npm/princess-names
[librariesio-url]: https://libraries.io/github/williambelle/princess-names

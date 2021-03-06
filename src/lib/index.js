'use strict';

const princessNames = require('./princess-names.json');

const randomItem = function (arr) {
  if (!Array.isArray(arr)) {
    throw new TypeError('Expected an array');
  }
  return arr[Math.floor(Math.random() * arr.length)];
};

exports.all = princessNames;
exports.random = function () {
  return randomItem(princessNames);
};

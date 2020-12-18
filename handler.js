'use strict';

module.exports.hello = async (input) => {
  return `hello ${input.name}`;
};

module.exports.add = async ({ x, y }) => {
  return x + y;
};

module.exports.double = async (n) => {
  return n * 2;
};

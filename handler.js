'use strict';

module.exports.hello = async (input) => {
  return `hello ${input.name}`;
};

module.exports.add = async ({ x, y }) => {
  return x + y;
};

class NumberIsSoBig extends Error {
  constructor(n) {
    super(`${n} is so big!`);
    this.name = 'NumberIsSoBig';
    Error.captureStackTrace(this, NumberIsSoBig);
  }
}

class NumberIsTooBig extends Error {
  constructor(n) {
    super(`${n} is too big!`);
    this.name = 'NumberIsTooBig';
    Error.captureStackTrace(this, NumberIsTooBig);
  }
}

module.exports.double = async (n) => {
  if (n > 40 && n <= 50) {
    throw new NumberIsSoBig(n);
  }

  if (n > 50) {
    throw new NumberIsTooBig(n);
  }

  return n * 2;
};

module.exports.doubleBigNumber = async (n) => {
  if (n > 50) {
    throw new NumberIsTooBig(n);
  }
  return n * 2;
};

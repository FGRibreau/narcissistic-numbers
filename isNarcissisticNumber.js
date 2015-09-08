'use strict';


/**
 * isNarcissisticNumber
 * @param  {Number} number number to check
 * @return {Object} {is: Boolean, explanation: String}
 */
module.exports = (number) => {
  return number
    .toFixed(0)
    .split('')
    .reduce(function (m, digit, i, numberAsString) {
      var k = numberAsString.length;
      if (i === 0) {
        m.output.explanation += `${number} =`;
      }
      m.output.explanation += ` ${digit}^${k}`;
      m.sum += Math.pow(+digit, k);

      if (i === k - 1) {
        m.output.is = m.sum === number;
      }

      return m;
    }, {
      sum: 0,
      output: {
        is: false,
        explanation: ''
      }
    }).output;
};

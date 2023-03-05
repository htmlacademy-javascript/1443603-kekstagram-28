/**
 * @param min {number}
 * @param max {number}
 * @returns {number}
 */
function calcRandomInt(min, max) {
  const lower = Math.ceil(Math.min(min, max));
  const upper = Math.floor(Math.max(min, max));
  const result = Math.random() * (upper - lower + 1) + lower;

  return Math.floor(result);
}

/**
 * @param min {number}
 * @param max {number}
 * @returns {(function(): (null|number))|Array}
 */
function calcUniqueInt(min, max) {
  const previousValues = [];

  return function () {
    let currentValue = calcRandomInt(min, max);
    if (previousValues.length >= (max - min + 1)) {
      return null;
    }
    while (previousValues.includes(currentValue)) {
      currentValue = calcRandomInt(min, max);
    }
    previousValues.push(currentValue);
    return currentValue;
  };
}

export {calcRandomInt, calcUniqueInt};


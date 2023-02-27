/**
 * Функция для проверки длины строки
 * @param str {string}
 * @param length {number}
 * @returns {boolean}
 */
function isMaxLength(str, length) {
  return str.length <= length;
}

isMaxLength('проверяемая строка', 20);
isMaxLength('проверяемая строка', 18);
isMaxLength('проверяемая строка', 10);

/**
 * Функция для проверки, является ли строка палиндромом
 * Нехорошее определение функции, потому что она может вернуть
 * разные типы - или boolean, или number
 * @param str {string}
 * @returns {boolean}
 */
function isPalindrome(str) {
  const stringToCheck = str.toLowerCase().replace(/\s/g, '');
  return str.length === 0
    ? NaN
    : stringToCheck === [...stringToCheck].reverse().join('');
}

isPalindrome('топот');
isPalindrome('ДовОд');
isPalindrome('Кекс');
isPalindrome('Лёша на полке клопа нашёл ');

/**
 * Функция для извлечения цифр из строки
 * Не обрабатывал вариант, что функция может принять число -
 * в этом случае нет смысла применять такую функцию
 * @param str {string}
 * @returns {number}
 */
function extractDigits(str) {
  let digits = '';
  [...str].forEach((char) => {
    if (/\d/.test(char)) {
      digits += char;
    }
  });
  return digits.length === 0
    ? NaN
    : parseInt(digits, 10);
}

extractDigits('2023 год');
extractDigits('ECMAScript 2022');
extractDigits('1 кефир, 0.5 батона');
extractDigits('агент 007');
extractDigits('а я томат');

/**
 * Функция-аналог padStart из стандартной библиотеки JS
 * @param str {string}
 * @param minLen {number}
 * @param pad {string}
 * @returns {string}
 */
function customPadStart(str, minLen, pad) {
  const additionalPad = minLen - str.length;
  if (additionalPad <= 0) {
    return str;
  }

  return pad.slice(0, additionalPad % pad.length)
    + pad.repeat(additionalPad / pad.length)
    + str;
}

customPadStart('1', 2, '0');
customPadStart('1', 4, '0');
customPadStart('q', 4, 'werty');
customPadStart('q', 4, 'we');
customPadStart('qwerty', 4, '0');

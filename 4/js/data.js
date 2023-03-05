import {calcUniqueInt, calcRandomInt} from './util.js';

const PHOTO_NUMBER = 25;
const PHOTO_ID_START = 1;
const PHOTO_ID_END = 25;
const URL_START = 1;
const URL_END = 25;
const LIKE_START = 15;
const LIKE_END = 200;
const COMMENT_ID_START = 1;
const COMMENT_ID_END = 150;
const AVATAR_ID_START = 1;
const AVATAR_ID_END = 6;

const NAMES = [
  'Петя',
  'Вася',
  'Коля',
  'Саша',
  'Катя',
  'Маша',
  'Наташа',
  'Ира',
];

const PHOTO_DESCRIPTIONS = [
  'Весенний лес',
  'Высокие горы',
  'Дикие джунгли',
  'Зимний сад',
  'Золотая осень'
];

const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

const commentId = calcUniqueInt(COMMENT_ID_START, COMMENT_ID_END);
const photoId = calcUniqueInt(PHOTO_ID_START, PHOTO_ID_END);
const photoUrl = calcUniqueInt(URL_START, URL_END);
const likeNumber = calcUniqueInt(LIKE_START, LIKE_END);

/**
 * @returns {{name: string, id: (number|null), avatar: string, message: string}}
 */
function createComment() {
  return {
    id: commentId(),
    avatar: `img/avatar-${calcRandomInt(AVATAR_ID_START, AVATAR_ID_END)}.svg`,
    message: MESSAGES[calcRandomInt(0, MESSAGES.length - 1)],
    name: NAMES[calcRandomInt(0, NAMES.length - 1)],
  };
}

/**
 *
 * @returns {{comments: {name: string, id: (number|null), avatar: string, message: string}, description: string, id: (number|null), url: string, likes: (number|null)}}
 */
function createPhotoDescription() {
  return {
    id: photoId(),
    url: `photos/${photoUrl()}.jpg`,
    description: PHOTO_DESCRIPTIONS[calcRandomInt(0, PHOTO_DESCRIPTIONS.length - 1)],
    likes: likeNumber(),
    comments: createComment(),
  };
}

/**
 * @returns {{comments: {name: string, id: (number|null), avatar: string, message: string}, description: string, id: number|null, url: string, likes: number|null}[]}
 */
function createPhotos() {
  return Array.from({length: PHOTO_NUMBER}, createPhotoDescription);
}

export {createPhotos};


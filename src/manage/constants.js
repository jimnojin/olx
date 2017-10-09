import uuid from 'uuid/v4';

/** Action types */
export const IS_LOADING = 'manage/IS_LOADING';
export const FETCH_SUCCESS = 'manage/FETCH_SUCCESS';
export const SAVE_KEY = 'manage/SAVE_KEY';

export const SELECT_KEY = 'manage/key/SELECT_KEY';
export const CANCEL_EDIT = 'manage/key/CANCEL_EDIT';
export const EDIT_KEY = 'manage/key/EDIT_KEY';
export const ADD_VALUE = 'manage/key/ADD_VALUE';
export const SAVE_VALUE = 'manage/key/SAVE_VALUE';
export const DELETE_VALUE = 'manage/key/DELETE_VALUE';

export const KEY_TYPE = {
  VOID: 'void',
  BOOLEAN: 'boolan',
  INTEGER: 'integer',
  FLOAT: 'float',
  DECIMAL: 'decimal',
  STRING: 'string',
  function: 'function'
};

/** Key Data Object */
export class Key {
  constructor({
    id = uuid(),
    name,
    description,
    type = KEY_TYPE.VOID,
    isPrivate,
    values = []
  } = {}) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.type = type;
    this.isPrivate = isPrivate;
    this.values = values;
  }
}

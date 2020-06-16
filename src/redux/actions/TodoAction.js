import {GET_LIST} from './ActionType';

const getListTodo = data => {
  return {
    type: GET_LIST,
    data,
  };
};

export {getListTodo};

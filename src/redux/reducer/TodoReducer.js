const initialState = {
  data: null,
  name: 'phantuan',
};
const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_LIST':
      return {
        ...state,
        data: action.data,
      };
    default:
      return state;
  }
};

export default todoReducer;

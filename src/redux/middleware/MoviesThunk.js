import {getDataMovies} from '../../sevices/MoviesSevices';
import {getListTodo} from '../actions/TodoAction';

const getDataMV = () => dispatch => {
  getDataMovies()
    .then(res => {
      console.log('reeeeeess', res);
      if (res) {
        dispatch(getListTodo(res));
        return true;
      } else {
        return false;
      }
    })
    .catch(() => {
      return false;
    });
};

export {getDataMV};

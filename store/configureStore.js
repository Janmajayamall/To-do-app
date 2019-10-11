import { createStore, combineReducers} from 'redux';

//import reducers\
import screenReducer from './Reducers/screenReducer'
import notesReducer from './Reducers/notesReducer'

export default () => {
  const store = createStore(
    combineReducers({
      screen: screenReducer,
      notes: notesReducer
    }),
  );

  return store;
};

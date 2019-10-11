import React from 'react';
//stores
import configureStore from './store/configureStore'
export const store = configureStore();
import {Provider} from 'react-redux'
//import index
import Index from './index';


export default class App extends React.Component {
  render(){
      return(
        <Provider store={store}>
          <Index/>
        </Provider> 
    )
  }
}
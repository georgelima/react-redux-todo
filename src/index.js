import React from 'react';
import ReactDOM from 'react-dom';
import Todo from './components/Todo';

import { bindActionCreators } from 'redux'
import { Provider } from 'react-redux';

import { store } from './store/index';

import * as TodoActionsCreator from './actions/todo';

const aC = bindActionCreators(TodoActionsCreator, store.dispatch);

ReactDOM.render(
  <Provider store={ store }>
			<div className="container">
        <Todo {...aC}/>
      </div>
  </Provider>,
  document.getElementById('root')
);

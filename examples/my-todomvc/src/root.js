import React from 'react';
import ReactDOM from 'react-dom';
import AppContainer from './containers/AppContainer';

ReactDOM.render(<AppContainer />, document.getElementById('todoapp'));

import TodoActions from './data/TodoActions';

TodoActions.addTodo('Pattee task');
TodoActions.addTodo('Another task');
TodoActions.addTodo('Finish this tutorial');

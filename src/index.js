import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch} from 'react-router-dom'

import App from './components/App';
import Heading from './components/Heading'
import rootReducer from './reducers/index'

import {Provider} from 'react-redux'
import {applyMiddleware, createStore} from 'redux'

const createStoreWithMiddleware = applyMiddleware()(createStore)

ReactDOM.render(
  <React.StrictMode>

    <Provider store={createStoreWithMiddleware(rootReducer)}>
        <BrowserRouter>
            <Heading />
            <Switch>
                <Route exact strict path='/' component={App} />
            </Switch>
        </BrowserRouter>
    </Provider>

  </React.StrictMode>,
  document.getElementById('root')
);


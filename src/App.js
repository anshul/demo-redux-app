import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Container from './Container';
import Home from './Container/Home';
import AddUser from './Container/AddUser';
import UserInfo from './Container/UserInfo';
import TodoApp from './Container/TodoApp/TodoApp';

// import s from './appStyles'
import { configureStore } from './store';

const store = configureStore();

console.log(store.getState());

const App = () =>
  <Provider store={store}>
    <Router>
      <Container>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/add-user" component={AddUser} />
          <Route path="/user" component={UserInfo} />
          <Route path="/todo" component={TodoApp} />
          <Route component={() => <h1>Not found</h1>} />
        </Switch>
      </Container>
    </Router>
  </Provider>;

export default App;

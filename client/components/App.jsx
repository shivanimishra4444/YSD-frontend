import React from 'react';
import UserList from './UserList';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import UserDetail from './UserDetail';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route exact path="/" component={UserList} />
          <Route path="/user/:id" component={UserDetail} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;

import React from 'react';
import { Route } from 'react-router-dom';

import Header from '../components/Header/Header';
import HomeContainer from '../home/HomeContainer';
import { RequestsContainer } from '../requests';
import { ManageContainer } from '../manage';

const App = () => (
  <div className="App">
    <Header></Header>

    <main>
      <Route exact path="/" component={HomeContainer} />
      <Route exact path="/requests" component={RequestsContainer} />
      <Route exact path="/manage" component={ManageContainer} />
    </main>
  </div>
)

export default App;
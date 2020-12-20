import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import './assets/scss/App.scss';
import Header from './assets/components/Header/Header';
const Home = lazy(() => import('./pages/Home/Home'));
function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Switch>
          <Suspense fallback={<div>loading...</div>}>
            <Route path="/" exact component={Home} />
          </Suspense>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;

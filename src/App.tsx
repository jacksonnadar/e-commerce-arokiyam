import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import './assets/scss/App.scss';
import Header from './assets/components/Header/Header';
import LoadingIcon from './assets/components/LoadingIcon/LoadingIcon';
const Home = lazy(() => import('./pages/Home/Home'));
function App() {
  return (
    <div className="App">
      <img src="./leaf.png" alt="leaf" className="bg-leaf"></img>
      <Header />
      <BrowserRouter>
        <Switch>
          <Suspense fallback={<LoadingIcon />}>
            <Route path="/" exact component={Home} />
          </Suspense>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;

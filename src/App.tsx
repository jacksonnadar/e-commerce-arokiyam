import React, { lazy, Suspense, useEffect, useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import UserContext from './assets/hooks/UserContext';
import firebase from 'firebase/app';
import './assets/scss/App.scss';
import Header from './assets/components/Header/Header';
import LoadingIcon from './assets/components/LoadingIcon/LoadingIcon';
import { auth } from './firebase';

const Home = lazy(() => import('./pages/Home/Home'));
const Auth = lazy(() => import('./pages/Auth/Auth'));
function App() {
  const [user, setUser] = useState<firebase.User | null>(null);

  useEffect(() => {
    auth.onAuthStateChanged((l_user) => {
      setUser(l_user);
    });
  }, []);
  return (
    <div className="App">
      <img src="./leaf.png" alt="leaf" className="bg-leaf"></img>
      <UserContext.Provider value={user}>
        <BrowserRouter>
          <Header />
          <Switch>
            <Suspense fallback={<LoadingIcon />}>
              <Route path="/" exact component={Home} />
              <Route path="/auth" exact component={Auth} />
            </Suspense>
          </Switch>
        </BrowserRouter>
      </UserContext.Provider>
    </div>
  );
}

export default App;

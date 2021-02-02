import React, { lazy, Suspense, useEffect, useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import UserContext from './assets/hooks/UserContext';
import firebase from 'firebase/app';
import './assets/scss/App.scss';
import Header from './assets/components/Header/Header';
import LoadingIcon from './assets/components/LoadingIcon/LoadingIcon';
import { auth } from './firebase';
import ProductPage from './pages/ProductPage/ProductPage';

const Home = lazy(() => import('./pages/Home/Home'));
const Auth = lazy(() => import('./pages/Auth/Auth'));
const ProductDisplay = lazy(
  () => import('./pages/ProductDisplay/ProductDisplay')
);
function App() {
  const [user, setUser] = useState<firebase.User | null>(null);

  useEffect(() => {
    auth.onAuthStateChanged((l_user) => {
      setUser(l_user);
      console.log(l_user);
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
              <Route path="/product" exact component={ProductDisplay} />
              <Route path="/product:id" exact component={ProductPage} />
            </Suspense>
          </Switch>
        </BrowserRouter>
      </UserContext.Provider>
    </div>
  );
}

export default App;

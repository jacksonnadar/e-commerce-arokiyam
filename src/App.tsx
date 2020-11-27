import React from 'react';
import './assets/scss/App.scss';
import Header from './assets/components/Header'
import Home from './pages/Home';
function App() {
  return (
    <div className="App">
      <Header/>
      <Home/>
    </div>
  );
}

export default App;

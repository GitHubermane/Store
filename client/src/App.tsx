import React from 'react';
import './styles/App.scss';
import { Header } from './components/Header';
import { LoginPage } from './pages/LoginPage';

function App() {
  return (
    <div>
      <Header />
      <div className="App">
        <LoginPage />
      </div>
    </div>
  );
}

export default App;

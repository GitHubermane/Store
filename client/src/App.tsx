import React from 'react';
import './styles/App.scss';
import { Header } from './components/Header';
import { LoginPage } from './pages/LoginPage';
import { AppRouter } from './components/AppRouter';

function App() {
  return (
    <AppRouter/>
  );
}

export default App;

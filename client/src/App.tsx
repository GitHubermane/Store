import { useEffect, useState } from 'react';
import { AppRouter } from './components/AppRouter';
import { Loader } from './components/Loader';
import { useTypedDispatch, useTypedSelector } from './hooks/TypedReduxHooks';
import { check } from './Redux/ActionCreator/Auth.AC';
import { getCart } from './Redux/ActionCreator/Cart.AC';

function App() {
  const { isLoading } = useTypedSelector(state => state.Auth)
  const dispatch = useTypedDispatch()

  useEffect(() => {
    if (localStorage.getItem('token')) {
      dispatch(check())
      dispatch(getCart())
    }
  }, [])

  return (
    <>
      {
        isLoading ?
          <Loader /> :
          <AppRouter />
      }
    </>
  )
}

export default App;

import { useEffect, useState } from 'react';
import { AppRouter } from './components/AppRouter';
import { Loader } from './components/Loader';
import { useTypedDispatch, useTypedSelector } from './hooks/TypedReduxHooks';
import { check } from './Redux/ActionCreator/Auth.AC';

function App() {
  const [isLoading, setLoading] = useState(true)
  // const { isLoading } = useTypedSelector(state => state.Auth)
  const dispatch = useTypedDispatch()

  useEffect(() => {
    if (localStorage.getItem('token')) {
      dispatch(check())
      setLoading(false)
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

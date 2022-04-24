import { useState, useEffect, Dispatch, SetStateAction } from 'react';

type Response<T> = [
  T, Dispatch<SetStateAction<T>>
]

function usePersistedState<T>( key: string, initialState: T) : Response<T>{
  const [state, setstate] = useState(() => {
    const storageValue = localStorage.getItem('theme')

    if(storageValue) {
      return JSON.parse(storageValue);
    }
    return initialState;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state))
  }, [key, state]);

  return [state, setstate]
}

export default usePersistedState;
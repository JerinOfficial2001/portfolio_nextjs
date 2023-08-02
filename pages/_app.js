import '@/styles/globals.css'
import { configureStore } from '@reduxjs/toolkit'

import { Provider } from 'react-redux'
import counterReducer from "../redux/counterSlice"

export default function App({ Component, pageProps }) {
  const store =configureStore({
    reducer:{
      counter:counterReducer,
    }
  })
  return (
    <Provider store={store}>
   
     
  <Component {...pageProps} />
 
 
  </Provider>
  )
}

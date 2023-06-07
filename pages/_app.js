import supabase from '@/config/Supabase'
import '@/styles/globals.css'
import { configureStore } from '@reduxjs/toolkit'
import { SessionContextProvider } from '@supabase/auth-helpers-react'
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
    <SessionContextProvider
    supabaseClient={supabase}
    initialSession={pageProps.initialSession}
    >
     
  <Component {...pageProps} />
 
  </SessionContextProvider>
  </Provider>
  )
}

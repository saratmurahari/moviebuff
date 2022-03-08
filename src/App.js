import { Suspense } from 'react'
import './assets/css/global.css'
import AppRouter from './app-router'

//use .env
function App() {
  //console.log('process.env :>> ', process.env)
  return (
    <>
      <Suspense fallback="loading..">
        <AppRouter />
      </Suspense>
    </>
  )
}

export default App

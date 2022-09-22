import { Suspense } from 'react'
import './assets/css/global.css'
import AppRouter from './app-router'
// eslint-disable-next-line no-undef
console.log('api key :>> ', `api key:${process.env.REACT_APP_API_KEY}`)
//use .env
//use superagent instead of axios
//use material-ui
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

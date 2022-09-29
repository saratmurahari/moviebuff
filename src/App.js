import { Suspense } from 'react'
import './assets/css/global.css'
import AppRouter from './app-router'
import { AppContextProvider } from './context/app-context/AppContext'

//use .env
//use react query
//use material-ui
function App() {
  return (
    <>
      <AppContextProvider>
        <Suspense fallback="loading..">
          <AppRouter />
        </Suspense>
      </AppContextProvider>
    </>
  )
}

export default App

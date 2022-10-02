import { Suspense } from 'react'
import './assets/css/global.css'
import AppRouter from './app-router'
import { AppContextProvider } from './context/app-context/AppContext'
import Layout from './components/layout/layout'
//use .env
//use react query
//use material-ui
function App() {
  return (
    <>
      <AppContextProvider>
        <Suspense fallback="loading..">
          <Layout>
            <AppRouter />
          </Layout>
        </Suspense>
      </AppContextProvider>
    </>
  )
}

export default App

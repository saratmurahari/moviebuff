import { Suspense } from 'react'
import './assets/css/global.css'
import AppRouter from './app-router'
import Loader from './components/loader/loader'
import { AppContextProvider } from './context/app-context/AppContext'
import Layout from './components/layout/layout'
import { QueryClient, QueryClientProvider } from 'react-query'
//use .env
//use react query
//use material-ui
// Create a client
const queryClient = new QueryClient()
function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <AppContextProvider>
          <Suspense fallback={<Loader />}>
            <Layout>
              <AppRouter />
            </Layout>
          </Suspense>
        </AppContextProvider>
      </QueryClientProvider>
    </>
  )
}

export default App

import { Route, Routes /* useHistory, Redirect */ } from 'react-router-dom'
import Home from './pages/home/home'
const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  )
}

export default AppRouter

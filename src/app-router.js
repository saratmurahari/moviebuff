import { Route, Routes /* useHistory, Redirect */ } from 'react-router-dom'
import Home from './pages/home/home'
import Login from './pages/login/login'
const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  )
}

export default AppRouter

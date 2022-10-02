import { Route, Routes /* useHistory, Redirect */ } from 'react-router-dom'
import Home from './pages/home/home'
import Login from './pages/login/login'
import { UserInfoRouter } from './pages/userInfo'
const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/user" element={<UserInfoRouter />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  )
}

export default AppRouter

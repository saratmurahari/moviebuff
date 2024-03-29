import { Route, Routes /* useHistory, Redirect */ } from 'react-router-dom'
import Home from './pages/home/home'
import Login from './pages/login/login'
import Movies from './pages/movies/movies'
import Tv from './pages/tv/tv'
import PeopleRouter from './pages/people/router'
import { UserInfoRouter } from './pages/userInfo'
const AppRouter = () => {
  return (
    <Routes>
      <Route path="/user" element={<UserInfoRouter />} />
      <Route path="/login" element={<Login />} />
      <Route path="/movies/:type" element={<Movies />} />
      <Route path="/tv/:type" element={<Tv />} />
      <Route path="/people/*" element={<PeopleRouter />} />
      <Route path="/" element={<Home />} />
    </Routes>
  )
}

export default AppRouter

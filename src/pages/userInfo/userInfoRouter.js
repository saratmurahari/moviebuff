import { Route, Routes } from 'react-router-dom'
import ProfileInfo from './profileInfo/profileInfo'
import ProfileRatings from './profileRatings/profileRatings'
const UserInfoRouter = () => {
  return (
    <Routes>
      <Route path="/:username" element={<ProfileInfo />} />
      <Route path="/:username/ratings" element={<ProfileRatings />} />
    </Routes>
  )
}

export default UserInfoRouter

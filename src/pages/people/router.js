import { Route, Routes, useLocation } from 'react-router-dom'
import { React, Suspense, lazy } from 'react'
import Loader from '../../components/loader/loader'
//import People from './people'
const People = lazy(() => import('./people'))
const PeopleDetails = lazy(() => import('./peopleDetails'))

const PeopleRouter = () => {
  const { pathname } = useLocation()
  console.log('pathname', pathname)
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path={`/:type`} element={<People />} />
        <Route path={`/:type/:id`} element={<PeopleDetails />} />
      </Routes>
    </Suspense>
  )
}

export default PeopleRouter

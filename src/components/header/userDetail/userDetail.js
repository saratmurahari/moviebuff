import s from './userDetail.module.css'
import classnames from 'classnames'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAppContext } from '../../../context/app-context'
import { get } from '../../../utils/api-utils'
import Loader from '../../loader/loader'
import { Link } from 'react-router-dom'

const { REACT_APP_API_KEY } = process.env

const UserDetail = () => {
  const { sessionId } = useAppContext()
  const [isLoading, setIsLoading] = useState(false)
  const [userDetails, setUserDetails] = useState(null)
  const navigate = useNavigate()
  useEffect(async () => {
    try {
      if (sessionId && !isLoading) {
        setIsLoading(true)
        const detailsResp = await get({
          url: `account?api_key=${REACT_APP_API_KEY}&session_id=${sessionId}`,
          requestBody: {}
        })
        setUserDetails(detailsResp?.data)
        console.log(
          'detailsResp?.data?.session_id',
          detailsResp?.data?.username
        )
      } else {
        navigate('/login')
      }
    } catch (e) {
      console.log(e)
    } finally {
      setIsLoading(false)
    }
  }, [sessionId])
  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div className={s.userAvatar}>
          <span>{userDetails?.username?.charAt(0)}</span>
          <div className={s.tooltipWrapper}>
            <div className={s.profileToolTip}>
              <div className={s.tooltipContent}>
                <div
                  className={classnames(s.userProfileLink, s.firstUserProfLink)}
                >
                  <h2>
                    <Link to={`user/${userDetails?.username}`}>
                      {userDetails?.username}
                    </Link>
                  </h2>
                  <p>
                    <Link to={`user/${userDetails?.username}`}>
                      View Profile
                    </Link>
                  </p>
                </div>
                <div className={s.userProfileLink}>
                  <p>
                    <Link to={`user/${userDetails?.username}`}>Ratings</Link>
                  </p>
                  <p>
                    <Link to={`user/${userDetails?.username}`}>Logout</Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
export default UserDetail

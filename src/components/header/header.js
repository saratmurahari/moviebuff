import s from './header.module.css'
import classnames from 'classnames'
import { Link } from 'react-router-dom'
import { useAppContext } from '../../context/app-context'
import UserDetail from './userDetail/userDetail'

const navData = [
  {
    id: 1,
    label: 'Movies',
    subLinks: [
      {
        id: 11,
        label: 'Popular',
        routeTo: 'movies/popular'
      },
      {
        id: 12,
        label: 'Top Rated',
        routeTo: 'movies/top-rated'
      }
    ]
  },
  {
    id: 2,
    label: 'TV Shows',
    subLinks: [
      {
        id: 21,
        label: 'Popular',
        routeTo: 'tv-shows/popular'
      },
      {
        id: 22,
        label: 'Top Rated',
        routeTo: 'tv-shows/top-rated'
      }
    ]
  },
  {
    id: 3,
    label: 'People',
    subLinks: [
      {
        id: 31,
        label: 'Popular',
        routeTo: 'people/popular'
      }
    ]
  }
]
const Header = () => {
  const { sessionId } = useAppContext()

  return (
    <header className={classnames(s.pageHeader)}>
      <div className={s.headerContent}>
        <nav className={s.navBlock}>
          <Link to="/">
            <div className={s.logo}>MOVIE BUFF</div>
            <div className={s.logoIcon}></div>
          </Link>

          <ul className={s.navLinks}>
            {navData.map((nav) => (
              <li className={s.links} key={nav.id}>
                <span>{nav.label}</span>
                <ul className={s.subLinks}>
                  {nav?.subLinks?.map((sub) => (
                    <li className={s.sub} key={sub.id}>
                      <Link to={sub.routeTo}>{sub.label}</Link>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </nav>
        <div className={s.loginButton}>
          {sessionId ? <UserDetail /> : <Link to="/login">Login</Link>}
        </div>
      </div>
    </header>
  )
}
export default Header

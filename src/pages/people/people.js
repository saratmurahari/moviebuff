import { useQuery } from 'react-query'
import { fetchActors } from '../../utils/apicalls-utils'
import s from './people.module.css'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { useNavigate, useLocation } from 'react-router-dom'
const People = () => {
  const {
    isPending,
    isError,
    data: actors,
    error
  } = useQuery({
    queryKey: ['actors'],
    queryFn: fetchActors
  })
  const navigate = useNavigate()
  const location = useLocation()
  const { pathname } = location

  const isLazyLoad = true
  console.log('isPending', isPending)
  console.log('isError', isError)
  console.log('error', error)
  return (
    <section className={s.wrapper}>
      <h2>Popular People</h2>
      <ul className={s.actorsList}>
        {actors &&
          actors.map((actor) => (
            <li
              key={actor.id}
              className={s.actorItem}
              onClick={() => {
                navigate(`${pathname}/${actor.id}`)
              }}
            >
              <div
                className={s.actorImgWrapper}
                /*  style={{ backgroundImage: `url(${actor?.image})` }} */
              >
                {isLazyLoad ? (
                  <LazyLoadImage src={actor?.image} className={s.actorImg} />
                ) : (
                  <img src={actor?.image} className={s.actorImg} />
                )}
              </div>
              <div className={s.actorDetails}>
                <p className={s.actorName}>{actor?.name}</p>
                <p className={s.actorKnownFor}>
                  {actor?.known_for?.join(', ')}
                </p>
              </div>
            </li>
          ))}
      </ul>
    </section>
  )
}
export default People

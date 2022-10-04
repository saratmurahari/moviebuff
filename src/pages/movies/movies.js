//import s from './movies.module.css'
import { useParams } from 'react-router-dom'
const Movies = () => {
  const { type } = useParams()
  return (
    <>
      <section>This is {type} section</section>
    </>
  )
}
export default Movies

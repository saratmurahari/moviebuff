//import s from './people.module.css'
import { useParams } from 'react-router-dom'
const People = () => {
  const { type } = useParams()
  return (
    <>
      <section>This is {type} section</section>
    </>
  )
}
export default People

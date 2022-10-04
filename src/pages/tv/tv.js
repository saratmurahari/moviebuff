//import s from './tv.module.css'
import { useParams } from 'react-router-dom'
const Tv = () => {
  const { type } = useParams()
  return (
    <>
      <section>This is {type} section</section>
    </>
  )
}
export default Tv

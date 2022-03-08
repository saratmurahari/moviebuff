import Header from '../header/header'
import { PropTypes } from 'prop-types'
import s from './layout.module.css'

const Layout = ({ content }) => {
  return (
    <>
      <Header />
      <div className={s.wrapper}>
        <main className={s.mainWrapper}>{content}</main>
        <footer></footer>
      </div>
    </>
  )
}
export default Layout

Layout.propTypes = {
  content: PropTypes.element.isRequired
}

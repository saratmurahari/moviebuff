import Header from '../header/header'
import Footer from '../footer/footer'
import { PropTypes } from 'prop-types'
import s from './layout.module.css'

const Layout = ({ children }) => {
  return (
    <section className={s.layoutWrapper}>
      <header className={s.header}>
        <Header />
      </header>

      <main className={s.main}>
        <div className={s.wrapper}>{children}</div>
      </main>
      <footer className={s.footer}>
        <div className={s.wrapper}>
          <Footer />
        </div>
      </footer>
    </section>
  )
}
export default Layout

Layout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.elementType])
    .isRequired
}

import s from './footer.module.css'
import { Link } from 'react-router-dom'
/* import srcImg from '../../assets/images/blue_square.svg' */

const Footer = () => {
  return (
    <>
      <nav className={s.footerContainer}>
        <div className={s.footerLogo}>
          {/* <img
            src={srcImg}
            alt="The Movie Database (TMDB)"
            width="130"
            height="94"
          /> */}
          <Link to="/">
            <div className={s.footerLogoBlock}>
              <div className={s.logoIcon}></div>
              <div className={s.logo}>MOVIE BUFF</div>
              <div className={s.logoIcon}></div>
            </div>
          </Link>
          <a className={s.footerGreeting} href="/user/saratmurahari">
            Hi saratmurahari!
          </a>
        </div>
        <div className={s.navBlocks}>
          <h3>The Basics</h3>
          <ul>
            <li>
              <a href="#">About TMDB</a>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>
            <li>
              <a href="#">Support Forums</a>
            </li>
            <li>
              <a href="#">API</a>
            </li>
            <li>
              <a href="#" target="_blank" rel="noopener noreferrer">
                System Status
              </a>
            </li>
          </ul>
        </div>
        <div className={s.navBlocks}>
          <h3>Get Involved</h3>
          <ul>
            <li>
              <a href="#">
                <span></span> Contribution Bible
              </a>
            </li>
            <li>
              <a href="#">Add New Movie</a>
            </li>
            <li>
              <a href="#">Add New TV Show</a>
            </li>
          </ul>
        </div>
        <div className={s.navBlocks}>
          <h3>Community</h3>
          <ul>
            <li>
              <a href="#">Guidelines</a>
            </li>
            <li>
              <a href="#">Discussions</a>
            </li>
            <li>
              <a href="#">Leaderboard</a>
            </li>
            <li>
              <a href="#" target="_blank" rel="noopener noreferrer">
                Twitter
              </a>
            </li>
          </ul>
        </div>
        <div className={s.navBlocks}>
          <h3>Legal</h3>
          <ul>
            <li>
              <a href="#">Terms of Use</a>
            </li>
            <li>
              <a href="#">API Terms of Use</a>
            </li>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  )
}
export default Footer

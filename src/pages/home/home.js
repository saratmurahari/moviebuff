import s from './home.module.css'
import homeBckground from '../../assets/images/home.jpeg'
const Home = () => {
  return (
    <>
      <section>
        <div className={s.centerImage}>
          <img src={homeBckground} />
          <div className={s.centerTxt}>
            <div className={s.title}>
              <h2>Welcome.</h2>
              <h3>
                Millions of movies, TV shows and people to discover. Explore
                now.
              </h3>
              <div className={s.searchForm}>
                <form
                  id="inner_search_form"
                  action="/search"
                  method="get"
                  acceptCharset="utf-8"
                >
                  <label>
                    <input
                      className={s.searchInput}
                      dir="auto"
                      id="inner_search_v4"
                      name="query"
                      type="text"
                      tabIndex="1"
                      autoCorrect="off"
                      autofill="off"
                      autoComplete="off"
                      spellCheck="false"
                      placeholder="Search for a movie, tv show, person......"
                      onChange={() => {}}
                      value=""
                    />
                  </label>
                  <input
                    type="submit"
                    className={s.submitButton}
                    value="Search"
                  />
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
export default Home

import s from './login.module.css'
import Layout from '../../components/layout/layout'
import { useState } from 'react'
const LoginContent = () => {
  const [uname, setUname] = useState('')
  const [pwd, setPwd] = useState('')
  return (
    <>
      <section className={s.wrapper}>
        <h2 className={s.loginTitle}>Login to your account</h2>

        <div className={s.loginForm}>
          <fieldset className={s.loginFieldSet}>
            <label className={s.formLabel} htmlFor="username">
              <span>Username</span>
              <input
                id="username"
                className={s.formInput}
                type="text"
                name="username"
                value={uname}
                autoCapitalize="off"
                onChange={(e) => setUname(e.target.value)}
              />
            </label>

            <label className={s.formLabel} htmlFor="password">
              <span>Password</span>
              <input
                id="password"
                className={s.formInput}
                type="password"
                name="password"
                value={pwd}
                onChange={(e) => setPwd(e.target.value)}
              />
            </label>
          </fieldset>

          <div className={s.buttonGroup}>
            <button id="login_button" className="button-primary" type="button">
              Login
            </button>
          </div>
        </div>
      </section>
    </>
  )
}
const Login = () => {
  return <Layout content={<LoginContent />} />
}
export default Login

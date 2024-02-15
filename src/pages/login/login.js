import s from './login.module.css'
import { useEffect } from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { get, post } from '../../utils/api-utils'
import { useAppContext } from '../../context/app-context'
import { useNavigate } from 'react-router-dom'
import AppActions from '../../context/app-context/AppActions'
const { REACT_APP_API_KEY } = process.env
const Login = () => {
  const { sessionId, dispatchAppContext } = useAppContext()
  const navigate = useNavigate()

  useEffect(() => {
    if (sessionId) {
      navigate('/')
    }
  }, [sessionId])

  const formik = useFormik({
    initialValues: {
      uname: '',
      pwd: ''
    },
    validationSchema: Yup.object({
      pwd: Yup.string()
        .required('No password provided.')
        .min(8, 'Password is too short - should be 8 chars minimum.')
        .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.'),
      uname: Yup.string().required('Username Required')
    }),
    onSubmit: async (values) => {
      try {
        console.log('values', values)
        const resp = await get({
          url: `authentication/token/new`,
          params: {
            api_key: REACT_APP_API_KEY
          }
        })
        let loginResp = null
        let loginSessionResp = null

        if (resp?.status === 200) {
          loginResp = await post({
            url: `authentication/token/validate_with_login?api_key=${REACT_APP_API_KEY}`,
            requestBody: {
              username: formik.values.uname,
              password: formik.values.pwd,
              request_token: resp?.data?.request_token
            }
          })
          console.log('loginResp', loginResp)
        }
        if (loginResp?.status === 200) {
          loginSessionResp = await post({
            url: `authentication/session/new?api_key=${REACT_APP_API_KEY}`,
            requestBody: {
              request_token: loginResp?.data?.request_token
            }
          })
        }
        console.log('loginSessionResp', loginSessionResp)
        console.log(
          'loginSessionResp?.data?.session_id',
          loginSessionResp?.data?.session_id
        )
        sessionStorage.setItem(
          'login_session',
          loginSessionResp?.data?.session_id
        )
        dispatchAppContext({
          type: AppActions.SET_SESSION_ID,
          data: loginSessionResp?.data?.session_id
        })
      } catch (e) {
        console.log(e)
      }
    }
  })
  //console.log('formik.values', formik)
  return (
    <>
      <section className={s.wrapper}>
        <h2 className={s.loginTitle}>Login to your account</h2>
        <p>
          <a className={s.signup} href="https://www.themoviedb.org/signup">
            Click here
          </a>{' '}
          to get started.
        </p>
        <div className={s.loginForm}>
          <form onSubmit={formik.handleSubmit} className={s.loginFieldSet}>
            <label className={s.formLabel} htmlFor="username">
              <span>Username</span>
              <input
                id="username"
                className={s.formInput}
                type="text"
                name="uname"
                value={formik.values.uname}
                autoCapitalize="off"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
              />
            </label>
            {formik.touched.uname && formik.errors.uname ? (
              <div className={s.error}>{formik.errors.uname}</div>
            ) : null}
            <label className={s.formLabel} htmlFor="password">
              <span>Password</span>
              <input
                id="password"
                className={s.formInput}
                type="password"
                name="pwd"
                value={formik.values.pwd}
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
              />
            </label>
            {formik.touched.pwd && formik.errors.pwd ? (
              <div className={s.error}>{formik.errors.pwd}</div>
            ) : null}
            <div className={s.buttonGroup}>
              <button
                id="login_button"
                className="button-primary"
                type="submit"
              >
                Login
              </button>
              <span>
                <a href="https://www.themoviedb.org/reset-password">
                  Reset Password
                </a>
              </span>
            </div>
          </form>
        </div>
      </section>
    </>
  )
}
/* const Login = () => {
  return <Layout content={<LoginContent />} />
} */
export default Login

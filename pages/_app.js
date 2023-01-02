import '../styles/globals.css'
import utilizeNProgress from '../utils/NProgress'

utilizeNProgress()

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp

import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return <>
    <div>HEAD</div>
    <Component {...pageProps} />
    <div>FOOTER</div>
  </>
}

export default MyApp

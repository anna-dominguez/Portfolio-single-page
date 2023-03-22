import '@/styles/globals.css'
import Head from 'next/head'

const App = ({ Component, pageProps }) => (
  <div className="bg-dark text-white grid w-full overflow-hidden">
    <Head>
      <title>Portfolio</title>
    </Head>
    <Component {...pageProps} />
  </div>
)

export default App

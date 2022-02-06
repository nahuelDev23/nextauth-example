import { SessionProvider } from 'next-auth/react'
import AuthGuard from '../components/AuthGuard'
import '../styles/globals.css'

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <SessionProvider session={session}>
      {
        Component.requireAuth
          ?
          <AuthGuard>
            <Component {...pageProps} />
          </AuthGuard>

          : <Component {...pageProps} />
      }

    </SessionProvider>

  )
}

export default MyApp

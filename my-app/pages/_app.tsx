import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from 'next/head'

export default function App({ Component, pageProps }: AppProps) {
  const date = new Date().toLocaleTimeString()
  return <div>
    <Head>
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet"/>
    </Head>
    <h1 className="bg-primary text-white p-3">Sample app</h1>
    <Component {...pageProps} />
    <footer className="fixed-bottom p-2">
      <hr className="m-1" />
      <p className="text-center m-0 p-0">
        copyright 2022 SYODA-Tuyano.
      </p>
    </footer>
  </div>
}

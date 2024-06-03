import Head from "next/head";
import { useState } from 'react'

export default function Home() {
  const [count, setCount] = useState(0)
  const onBtnClick = () => {
    setCount(count + 1)
  }
  return (
    <div>
      <Head>
        <title>My Sample App</title>
      </Head>
      <main className="container">
        <h2>Index page.</h2>
        <p className="alert alert-primary h5 my-3">
          count: {count} times.
        </p>
        <button className="btn btn-primary" onClick={onBtnClick}>
          Click
        </button>
      </main>
    </div>
  )
}

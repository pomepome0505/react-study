import Head from "next/head";
const url = "http://localhost:3000/data.json"

export async function getServerSideProps(context) {
  const result = await fetch(url)
  const data = await result.json()
  const n = Math.floor(Math.random() * data.length)
  console.log(data[n])
  return {
    props:data[n]
  }
}

type Props = {
  message: String
  name: String
  email: String
}

export default function Home(props: Props) {
  return (
    <div>
      <Head>
        <title>My Sample App</title>
      </Head>
      <main className="container">
        <h2>Index page.</h2>
        <div className="alert alert-primary my-3">
          <p className="h5">msg:{props.message}.</p>
          <p className="h6">by {props.name}.（{props.email}）</p>
        </div>
      </main>
    </div>
  )
}

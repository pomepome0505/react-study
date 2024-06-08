import Link from 'next/link'
type Props = {
  appname: string
  author: string
}

export default function Home(props: Props) {
  return (
    <main className="container">
      <h2>Index page.</h2>
      <div className="alert alert-primary my-3">
        <p className="h6">This is "{props.appname}".by{props.author}</p>
      </div>
      <p className="btn btn-outline-primary">
        <Link href="/other">Go Ohter page.</Link>
      </p>
    </main>
  )
}

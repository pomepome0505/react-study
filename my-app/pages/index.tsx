import Head from "next/head";
import { useState, useEffect } from 'react'
const url = "http://localhost:3000/data.json"

type Props = {
  data: [
    {
      message: string
      name: string
      email: string
    }
  ]
}

type Data = {
  message: string
  name: string
  email: string
}

export default function Home(props: Props) {
  const [data,setData] = useState(<tr><td>no data.</td></tr>)
  useEffect(() => {
    fetch(url).then(res => res.json()).then(res=>{
      setData(res.map((value: Data) => 
        <tr className="my-2 h6" key={value.name}>
          <td>{value.message}</td>
          <td>{value.name}</td>
          <td>{value.email}</td>
        </tr>
      ))
    })
  },[])
  return (
    <div>
      <Head>
        <title>My Sample App</title>
      </Head>
      <main className="container">
        <h2>Index page.</h2>
        <div className="alert alert-primary my-3">
          <table className="alert alert-primary my-3">
            <thead>
              <tr>
                <th>Message</th>
                <th>Name</th>
                <th>Email</th>
              </tr>
            </thead>
            <tbody>{data}</tbody>
          </table>
        </div>
      </main>
    </div>
  )
}

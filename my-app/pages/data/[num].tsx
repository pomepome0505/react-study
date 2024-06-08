import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'

const data = [
  {name:'Taro', email:'taro@yamada', tel:'090-999-999'},
  {name:'Hanako', email:'hanako@flower', tel:'080-888-888'},
  {name:'Sachiko', email:'sachiko@happy', tel:'070-777-777'}
]

type Props = {

}

export default function Home(props: Props) {
  const [item,setItem] = useState({name:'',email:'',tel:''})
  const router = useRouter()

  useEffect(() => {
    if(!router.isReady) return
    let { num } = router.query
    if (!num) return
    const setNum: number = +num < data.length ? +num : 0
    setItem(data[setNum])
  }, [router.isReady])

  return (
    <main className="container">
      <h2 className="my-4">Index page.</h2>
      <div className="alert alert-primary">
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Tel</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>{item.tel}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </main>
  )
}
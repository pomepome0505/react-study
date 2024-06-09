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
  const [params, setParams] = useState<string[]>([])
  const router = useRouter()

  useEffect(() => {
    if(!router.isReady) return
    console.log(router.query.params)
    const queryParams = router.query.params
    if (!Array.isArray(queryParams)) return
    setParams(queryParams)
  }, [router.isReady])

  return (
    <main className="container">
      <h2 className="my-4">Index page.</h2>
      <div className="alert alert-primary">
        <table className="table">
          <thead>
            <tr>
              <th>No.</th>
              <th>value</th>
            </tr>
          </thead>
          <tbody>
            {params.map((value,index)=>(
            <tr key={index}>
              <th width="100px">{index}</th>
              <td>{value}</td>
            </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  )
}
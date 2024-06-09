type Props = {

}

export default function Ohter(props: Props) {
  return (
    <main className="container">
      <h2 className="my-4">Ohter page.</h2>
      <div className="alert alert-info">
        <p className="h6">This is Other page content.</p>
      </div>
      <p></p>
    </main>
  )
}

const modal = {
  position:"fixed",
  width:"50%",
  left:"25%",
  top:"25%",
  padding:"20px"
}

Ohter.getPage = function(page: JSX.Element): JSX.Element {
  return (
    <div>
      <h6 className="text-danger text-center">*** development mode ***</h6>
      {page}
      <div className="text-danger text-center bg-white border border-5" style={modal}>
        <h3>Caution!</h3>
        <h5>これは、開発用のダミーページです。使用しないで下さい。</h5>
      </div>
    </div>
  )
}
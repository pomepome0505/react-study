import React from 'react'
type Props = {
  appname: string
}

const Header: React.FC<Props> = (props) => {
  return (
    <div>
      <h1 className="h4 bg-secondary text-white p-2">
        {props.appname}
      </h1>
    </div>
  )
}

export default Header
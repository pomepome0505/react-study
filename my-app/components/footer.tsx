import React from 'react'
type Props = {
  author: string
}

const Footer: React.FC<Props> = (props) => {
  return (
    <footer className="fixed-bottom p-2">
      <hr className="m-1" />
      <p className="text-center m-0 p-0 text-secondary">
        copyright 2022 {props.author}.
      </p>
    </footer>
  )
}

export default Footer

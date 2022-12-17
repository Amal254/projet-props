import React, { Children } from 'react'

const Profession = ({spec,children}) => {
    console.log("props", children)
  return (
    <div>
    <h1 >{spec} </h1>
<img src={children} alt="" />
    </div>
  )
}
Profession.defaultProps = {
    spec: "comptable",
  }

export default Profession


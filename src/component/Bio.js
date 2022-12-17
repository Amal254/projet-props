import React from 'react'

const Bio = ({cv}) => {
    console.log("props", cv)
  return (
    <div>
    <h1 >{cv} </h1>
    </div>
  )
}
Bio.defaultProps = {
    cv: "cv",
  }

export default Bio

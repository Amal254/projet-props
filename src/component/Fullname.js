import React from 'react'
import PropTypes from 'prop-types';

const Fullname = ({data}) => {
    console.log("props", data)
  return (
    <div>
     <h1 >{data} </h1>
    </div>
  )
}
Fullname.propTypes = {
  message: PropTypes.string
};
Fullname.defaultProps = {
  data: "Amal ben ammar",
}
export default Fullname

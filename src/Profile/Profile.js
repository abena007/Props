import React from 'react'
import propTypes from 'prop-types'
const Profile = (props) => {
  return (
    <div className="flex"> 
    
      {props.children}<br/>
      {props.fullName}<br/>
      {props.prof}<br/>
      {props.bio}<br/>
      {alert(props.hName) }<br/>
      
    </div>
  )
}

Profile.propTypes={fullName:propTypes.string,}
Profile.propTypes={prof:propTypes.string,}

export default Profile
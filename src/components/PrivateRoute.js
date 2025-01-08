import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom';

const PrivateRoute = ({isLoggedIn, children}) => {

  if(isLoggedIn)
  {
    return children;
  }
  else{
    return <Navigate to="/login"/>
  }
}

export default PrivateRoute
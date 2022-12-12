import React from 'react'
import { useLocation, useParams, useRouteLoaderData } from 'react-router-dom'

export default function User() {
  const { state:uo } = useLocation();
  const params = useParams();
  //let userObj = state;
  //console.log(userObj.userName);
  console.log(params.userId);
  console.log(uo.userName);

  return (
    <div>
      User <br />
    </div>
  )
}

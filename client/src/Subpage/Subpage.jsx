import React from 'react'
import Objectives from './Objectives'
import Subpagetop from './Subpagetop';


const Subpage = (props) => {
  console.log(props.fetchLinkData)
  return (
    <div>
      <Subpagetop text={props.fetchLinkData}/>
     <Objectives/>
    </div>
  )
}

export default Subpage;

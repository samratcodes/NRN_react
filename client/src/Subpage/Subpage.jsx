import React from 'react'
import Objectives from './Objectives'
import Subpagetop from './Subpagetop';


const Subpage = (props) => {
  console.log(props.fetchLinkData,':',props.headerArray)
  return (
    <div>
      <Subpagetop text={props.fetchLinkData} />
     <Objectives elementObject={props.headerArray}/>
    </div>
  )
}

export default Subpage;

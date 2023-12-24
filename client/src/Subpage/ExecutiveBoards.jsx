import React, { useEffect, useState } from 'react';
import Subpagetop from './Subpagetop';
import ExecutiveBoardAdd from './ExecutiveBoardADD/ExecutiveBoardAdd';
const ExecutiveBoards = () => {

  const [members, setmembers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:7000/api/v1/members")
      .then((res) => res.json())
      .then((data) => {
        setmembers(data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div>
        <Subpagetop/>
      <div class="projects">
  <div class="objectiveGoals">
   <div class="og_title">
        Executive Boards
   </div>
    <div class="ogcontents">
    <div class="ogc_objectives">
   <div class="ogco_title">
       VIPs
   </div>
   <div class="ogco_content">
    <ol>
       {members.map((element, index) => (
            <li>
                <strong>Name:</strong> {element.name},<br />
                <strong>Email:</strong> {element.email},
                <strong>Position:</strong> {element.position}
            </li>
        ))}
        <ExecutiveBoardAdd/>
    </ol>
 


   </div>
    </div>
    </div>
 
</div>
</div>

    </div>
  )
}

export default ExecutiveBoards

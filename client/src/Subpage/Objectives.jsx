import React from 'react'
import './Objectives.css'
import { useLocation } from 'react-router-dom';
const Objectives = () => {
  const location = useLocation();
  const customData = location.state && location.state.customData;

  return (
    <div>

<div class="projects">
  <div class="objectiveGoals">
   <div class="og_title">
      Objectives and Goals
   </div>
    <div class="ogcontents">
    <div class="ogc_objectives">
   <div class="ogco_title">
       The Objectives of the NRN USA shall be :
   </div>
   <div class="ogco_content">
  <ol>
  <li>To function as the national Board of NRN USA and the national coordination council of its international organization NRNA ICC</li>
  <li>To represent and promote the interest, right, privileges, and immunities of NRN in the United States and Nepal</li>
  <li>To coordinate the National Board’s activities with the NRN USA and its State Chapters</li>
  <li>To coordinate with other national and global not-for-profit organizations with similar interests to promote and protect NRN’s interests, rights, privileges, and immunities</li>
</ol>

   </div>
    </div>
    </div>
      <div class="ogcontents">
    <div class="ogc_goals">
   <div class="ogcg_title">
       The Objectives of the NRN USA shall be :
   </div>
   <div class="ogcg_content">
 <ol>
  <li>To function as the national Board of NRN USA and the national coordination council of its international organization NRNA ICC</li>
  <li>To represent and promote the interest, right, privileges, and immunities of NRN in the United States and Nepal</li>
  <li>To coordinate the National Board’s activities with the NRN USA and its State Chapters</li>
  <li>To coordinate with other national and global not-for-profit organizations with similar interests to promote and protect NRN’s interests, rights, privileges, and immunities</li>
</ol>



   </div>
    </div>
    </div>
     
</div>
</div>
    </div>
  )
}

export default Objectives

import React from 'react'
import './Objectives.css'
import { useLocation } from 'react-router-dom';
const Objectives = (props) => {
  const location = useLocation();
  const customData = location.state && location.state.customData;
  let ContentObject =props.elementObject
  console.log(props.elementObject)
  return (
    <div>
  {ContentObject.contents.length > 0 ? (
<div class="projects">
  <div class="objectiveGoals">
   <div class="og_title">
      {ContentObject.contents[0].heading}
   </div>
    <div class="ogcontents">
    <div class="ogc_objectives">
   <div class="ogc_ob_img">
   {ContentObject.contents[0].imagePath.map((image, index) => (
 <div className="imageSection">
    <img src={`http://localhost:7000/${image}`} alt="" />
    {ContentObject.contents[0].imageDescription[index]}
    </div>
))}
   </div>

   <div class="ogco_content">
    {ContentObject.contents[0].longDescription} Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum tempore impedit distinctio cumque blanditiis qui magnam repellendus eius sapiente veritatis saepe, nisi soluta aliquid officia quam perspiciatis, maxime minus fugit.

   </div>
    </div>
    </div>
      <div class="ogcontents">
    <div class="ogc_goals">
   <div class="ogcg_title">
   {ContentObject.contents[0].subHeading}
   </div>
   <div class="ogcg_content">
    {ContentObject.contents[0].shortDescription}
   </div>
    </div>
    </div>
     
</div>
</div>):null}
 {ContentObject.subMenus.length > 0 ? (
<div class="projects">
  <div class="objectiveGoals">
   <div class="og_title">
      {ContentObject.subMenus[0].heading}
   </div>
    <div class="ogcontents">
    <div class="ogc_objectives">
   <div class="ogco_title">
       The Objectives of the NRN USA shall be :
   </div>
   <div className="imageSection">
    {ContentObject.subMenus[0].imagePath.map((image,index)=>{
      return(
        <div key={index}>
        {image}
        :
        {ContentObject.subMenus[0].imageDescription[index]}
        </div>
      )
    })}
  
   </div>
   <div class="ogco_content">
    {ContentObject.subMenus[0].longDescription}


   </div>
    </div>
    </div>
      <div class="ogcontents">
    <div class="ogc_goals">
   <div class="ogcg_title">
   {ContentObject.subMenus[0].subHeading}
   </div>
   <div class="ogcg_content">
    {ContentObject.subMenus[0].shortDescription}
   </div>
    </div>
    </div>
     
</div>
</div>):null} 
    </div>
  )
}

export default Objectives

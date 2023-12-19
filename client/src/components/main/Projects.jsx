import Fetch from '../Fetch/Fetch'
import './Projects.css'

const Projects = () => {
  return (
    <div>
      
  <div className="section4">
    <div class="ourprojects">
      <div class="op_title">
     <div className="op_text">
     <div class="opt1">
        Ecommerce &nbsp;
       </div>
       <div class="opt2">
        Products:
       </div>
     </div>
     <a href={`/Ecommerce`}> 
       <div class="UE_viewall">
  View All 
  </div></a>
      </div>
    <div class="op_images">
      <Fetch/>
     {/* <div> <img src="https://www.nrnusa.org/static/assets/images/it_flyer.jpeg" alt=""/></div>
        <div><img src="https://www.nrnusa.org/static/assets/images/ID%20Card.jpg" alt=""/></div>
          <div><img src="https://www.nrnusa.org/static/assets/images/scholorship.jpeg" alt=""/></div>
            <div><img src="https://www.nrnusa.org/static/assets/images/HELP%20DESK.jpg" alt=""/></div> */}
    </div>
    </div>
  </div>
    </div>
  
  )
}

export default Projects

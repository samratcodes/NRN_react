import './Newsletter.css'
const Newsletter = () => {
  return (
    <div>
      <div class="section5">
   <div class="newsletter">
    <div class="nltext">
     <div class="nlt_title">
Subscribe to our Newsletter
     </div>
     <div class="nlt_bottom">
Get notified about our events and meetings through email
     </div>
    </div>
    <div class="nlform">

   <form >
     <div class="name">
   
       <input type="text" name="FirstName" id="FirstName" required placeholder="FirstName"/>
      
      <input type="text" name="LastName" id="LastName" required placeholder="LastName"/>
     </div>
     
      <input type="email" name="Email" id="Email" required placeholder="Email address"/>
      
      <input type="submit" value="Submit"/>
      </form>
    </div>
  </div>
 </div>
    </div>
   
  )
}

export default Newsletter

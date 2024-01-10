import './Event.css'

const Events = (props) => {
  const uniqueEventsData = props.data.reduce((uniqueData, currentEvent) => {
    const isDuplicate = uniqueData.some((event) => event.heading === currentEvent.heading);
    return isDuplicate ? uniqueData : [...uniqueData, currentEvent];
  }, []);
  console.log(uniqueEventsData);
  return (
    <div>
      <div class="section2">
<div class="upcomingEvents">
  <div class="UE_text">
    <div class="uet1">
    News & Events
    </div>

  </div>
</div>
<div class="uecards">
{uniqueEventsData.map((event) => (
  <div class="uec1">
  <img src={`http://localhost:7000/${event.imagePath[0]}`} alt="" />
  <div className="UE_date">
      {event.addedOn}
    </div>
    <div class="uec1_title">
      {event.heading}
    </div>
    <div className="UE_shortdescription">
      {event.shortDescription}
    </div>
    <div className="contentby">
     By: {event.contentBy}
    </div>
     <div className="continue_reading">
      Continue Reading
     </div>
  </div>
))}

</div>

</div>
  </div>
   
  )
}

export default Events

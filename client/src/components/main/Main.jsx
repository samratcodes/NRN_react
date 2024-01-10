import ComingSoon from './ComingSoon';
import Connect from './Connect';
import Events from './Events';
import Gallery from './Gallery';
import Hello from './Hello';
import Message from './Message';
import Mission from './Mission';
import News from './News';
import Newsletter from './Newsletter';
import RelatedOrg from './RelatedOrg';
import Intro from './intro';
import { useState, useEffect } from 'react';

const Main = (props) => {
  const [eventsData, setEventsData] = useState([]);
   
  useEffect(() => {
    if (props.HomeData && props.HomeData.length > 0) {
      const data = props.HomeData[0];
      const contents = data ? data.contents : null;

      if (contents) {
        const upcomingEvents = contents.filter((content) => content.pageLocation === 'upcommingEvents');
        setEventsData((prevData) => [...prevData, ...upcomingEvents]);
      }
    }
  }, [props.HomeData]);

  return (
    <div>
      <Intro />
      <Hello/>
      <Events data={eventsData} />
      <Mission/>
      <Message/>
      <ComingSoon/>
      <RelatedOrg/>
      <Gallery/>
      <Connect/>
      <News />
      <Newsletter />
    </div>
  );
};

export default Main;

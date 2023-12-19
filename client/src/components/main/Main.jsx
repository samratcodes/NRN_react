import React from 'react'
import Events  from './Events'
import News from "./News"
import Newsletter from "./Newsletter"
import Projects from "./Projects"
import Intro from "./intro"

const Main = () => {
  return (
    <div>
      <Intro/>
<Events/>
<News/>
<Projects/>
<Newsletter/>

    </div>
  )
}

export default Main

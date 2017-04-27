import React from "react"
import ReactDOM from "react-dom"

import ScrollArea from './components/ScrollArea'

const Root = document.getElementById('root')

let style = {
     position: "relative",
     width:"500px", 
     height:"400px"
}

let style2 = {
     position: "relative",
     width:"500px", 
     height:"400px"
}
ReactDOM.render(
     <div style={style}>
     <ScrollArea
          //containerInlineStyle={}
          //verticalInlineStyle={}
          //horizontalInlineStyle={}
          containerClassNames={"scroll-area-container"}
          verticalClassNames={"scrollbar-vertical"}
          horizontalClassNames={"scrollbar-horizontal"}
          minVerticalLength={20}
          minHoriztonalLength={20}
          verticalWidth={"8px"}
          horizontalWidth={"8px"}
          fadeInDuration={1000}
          fadeInDelay={1000}
          fadeOutDuration={1000}
          fadeOutDelay={1000}
          >
          <div >
       <img style={style2} src="http://kindakind.com/wp-content/uploads/2016/09/pandas-live_64dff22c2fe56e9.jpg" />

     </div> </ScrollArea></div>, Root);



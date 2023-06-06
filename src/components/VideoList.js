import React from 'react'
import VideoListEntry from "./VideoListEntry"
export default function VideoList(props) {
  return (
    <div className="video-list">
      
    {props.videos.map((el)=>(<div><h5><em>videoListEntry {console.log(el)}</em><VideoListEntry /> </h5></div>))}
    
 
  </div> 
   )
}

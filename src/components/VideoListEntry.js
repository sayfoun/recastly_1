import React from 'react'


export default function VideoListEntry({videoId,info,video}) {
  const handelClick=()=>{
    localStorage.setItem("video",JSON.stringify(video))
    window.location.reload()
  }
  return (
    <div className="video-list-entry media">
    <div className="media-left media-middle">
      <img className="media-object" src={`https://i.ytimg.com/vi/${videoId}/default.jpg`} alt="" />
    </div>
  
    <div className="media-body"
    onClick={()=>handelClick(video)}
    >
      <div className="video-list-entry-title">{info.title}</div>
      <div className="video-list-entry-detail">{info.description}</div>
    </div>
  </div>  
  )
}

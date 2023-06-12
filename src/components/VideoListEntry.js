import React from 'react'
export default function VideoListEntry({videoId,info}) {
  return (
    <div className="video-list-entry media">
    <div className="media-left media-middle">
      <img className="media-object" src={`https://i.ytimg.com/vi/${videoId}/default.jpg`} alt="" />
    </div>
    <div className="media-body">
      <div onClick={()=>localStorage.setItem} className="video-list-entry-title">{info.title}</div>
      <div className="video-list-entry-detail">{info.description}</div>
    </div>
  </div>  
  )
}

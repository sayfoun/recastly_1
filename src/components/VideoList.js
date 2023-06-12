import React from 'react'
import VideoListEntry from './VideoListEntry'
export default function videoliste({video,search}){
    return(
        <div className="video-list">
            <div>
                <h5>
                    <em>VideoListEntry</em>
                    {video.filter((el)=> el.snippet.title.toLowerCase().includes(search))
                    .map((el,i)=>(<VideoListEntry videoId={el.id.videoId} info={el.snippet}/>
                    ))}
                </h5>
            </div>
        </div>
    )
}
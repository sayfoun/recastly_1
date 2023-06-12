import React from "react";
import VideoListEntry from "./VideoListEntry";
export default function VideoList({ videos, search }) {
  return (
    <div className="video-list">
      <div>
        <h5>
          <em>videoListEntry</em>
          {videos
            .filter((el) => el.snippet.title.toLowerCase().includes(search.toLowerCase()))
            .map((el, i) => (
              <VideoListEntry videoId={el.id.videoId} info={el.snippet}  video={el}/>
            ))}
        </h5>
      </div>
    </div>
  );
}

import React, { Component } from 'react'

export default class VideoPlayer extends Component {
  constructor(){
    super()
    this.state={
      video:null
    }
  }
  componentDidMount(){
    var video=localStorage.getItem("video")
   this.setState({video:JSON.parse(video)})
  }
  render() {
    const {video}=this.state
    return (
      <div className="video-player">
        {console.log(video)}
      <div className="embed-responsive embed-responsive-16by9">
        <iframe className="embed-responsive-item" src={`https://www.youtube.com/embed/${video?.id.videoId}`} allowFullScreen></iframe>
      </div>
      <div className="video-player-details">
        <h3>{video?.snippet.title}</h3>
        <div>{video?.snippet.description}</div>
      </div>
    </div> 
    )
  }
}

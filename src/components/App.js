import React, { useState } from 'react'
import exampleVideoData from'../data/data'
import Search from './Search'
import VidoPlayer from './VideoPlayer'
import VideoList from './VideoList'
import 'bootstrap/dist/css/bootstrap.min.css';
export default function App() {
  const[search,setsearch]=useState("")
  const handlechange=(e)=>{
    setsearch(e.target.value)
  }
  return (
    <div>
    <nav className="navbar">
      <div className="col-md-6 offset-md-3">
        <div><h5><em>search</em><Search/></h5></div>
      </div>
    </nav>
    <div className="row">
      <div className="col-md-7">
        <div><h5><em>videoPlayer</em><VidoPlayer/></h5></div>
      </div>
      <div className="col-md-5">
        <div><h5><em>videoList</em><VideoList data={exampleVideoData} search/></h5></div>
      </div>
    </div>
  </div>
  )
}

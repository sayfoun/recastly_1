import React, { useState } from 'react'
import exampleVideoData from "../data/data"
import Search from "./Search"
import VideoPlayer from "./VideoPlayer"
import VideoList  from "./VideoList"
import 'bootstrap/dist/css/bootstrap.min.css';


export default function App() {
  const[search,setSearch]=useState('')

  const handleChange=(e)=>{
      setSearch(e.target.value)
  }
  return (
    <div>
    <nav className="navbar">
      <div className="col-md-6 offset-md-3">
        <div><h5><em>search</em> <Search handleChange={handleChange} /></h5></div>
      </div>
    </nav>
    <div className="row">
    
      <div className="col-md-7">
        <div><h5><em>videoPlayer</em><VideoPlayer /> </h5></div>
      </div>
      <div className="col-md-5">
        <div><h5><em>videoList</em> <VideoList videos={exampleVideoData} search={search} /></h5></div>
      </div>
    </div>
  </div>
  )
}

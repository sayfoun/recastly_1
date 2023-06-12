import React from 'react'

export default function Search(handlechange) {
  return (
    <div className="search-bar form-inline">
    <input className="form-control" type="text" onchange={(e)=>handlechange(e)}/>
    <button className="btn hidden-sm-down">
      <span className="glyphicon glyphicon-search"></span>
    </button>
  </div>  
  )}
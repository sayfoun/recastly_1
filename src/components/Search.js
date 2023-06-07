import React from 'react'

export default function Search({handleChange}) {
  return (
    <div className="search-bar form-inline">
    <input className="form-control" type="text" onChange={(e)=>handleChange(e)} />
    <button className="btn hidden-sm-down">
      <span className="glyphicon glyphicon-search"></span>
    </button>
  </div>  
  )
}

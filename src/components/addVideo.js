import { useState } from 'react';
import Form from 'react-bootstrap/Form';

function AddVideo() {
  const [vidoId,setVideoId]=useState('')
  const [Title,setTitle]=useState('')
  const [Description,setDescription]=useState('')
  const  handleAdd = ()=>{
    console.log(vidoId)
  }
  return (
    <div>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>VideoId</Form.Label>
        <Form.Control type="text" placeholder="VideoId" onChange={(e)=>setVideoId(e.target.value)}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Title</Form.Label>
        <Form.Control type="text" placeholder="Title" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Description</Form.Label>
        <Form.Control type="text" placeholder="Description" />
      </Form.Group>
      <button onClick={handleAdd}>Send</button>
    </div>




  );
}

export default AddVideo;
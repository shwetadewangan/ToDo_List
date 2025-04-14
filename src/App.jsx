import React from 'react'
import { useState } from 'react'

const App = () => {
  const [title, settitle] = useState("")
  const [desc, setdesc] = useState("")
  const [mainTask, setMainTask] = useState([])

  const submitHandler = (e)=>{
    e.preventDefault()
   setMainTask([...mainTask, {title: title, desc: desc}])
    settitle("")
    setdesc("")
    console.log(mainTask)
  } 

  const deleteHandler = (i) =>{
    let copyTask = [...mainTask]
    copyTask.splice(i,1)
    setMainTask(copyTask)

  }


  let renderTask = <h2>No Task Availoble</h2>;

 if(mainTask.length>0){
  renderTask = mainTask.map((t,i)=>{
    return (
      
        <div key={i} className='mainTask'>
      <h5>{t.title}</h5>
      <h6>{t.desc}</h6>
   
    <button
    onClick={()=>{
      deleteHandler(i)
    }} 
    className='btn'>Delete</button>
      </div>
    );
  
    });
 };
  return (
   <>
   <h1>My Todo List</h1>
   <form onSubmit={submitHandler}>
    <input type='text' 
    placeholder='Enter your Task' 
    value={title}
    onChange={(e)=>{
      settitle(e.target.value)
    }}></input>
    <input type='text' 
    placeholder='Enter your Description'
    value={desc}
    onChange={(e)=>{
      setdesc(e.target.value)
    }}
    ></input>
    <button>Add Task</button>
   </form>
   <hr/>
   <div className='container'>
    <ul>
      {renderTask}
    </ul>

   </div>
   </>
  )
}

export default App
import './Addtask.css'
import React ,{useState} from 'react'
import axios from 'axios'
function Addtask(props) {
    const [task,Settask]= useState("")
    const addtask=()=>{
        if(task.trim()===''){
            return 
        }
        else{
       axios.post('http://localhost:8000/api/tasks',{
        todo:task,
        isComplete:false
       }).then(res=>{
         Settask(" ")//to empty the input box to get next input
         props.addTask(res.data)
       }).catch(err=>
        console.log(err))
        }
    }
  return (
    <div className='addtask'> 
    <input type='text' placeholder='Add Task....' value={task} onChange={e=>Settask(e.target.value)}/> 
    <button onClick={()=>addtask()}>Add Task</button>
    </div>
  )
}

export default Addtask
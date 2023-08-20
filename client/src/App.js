import React,{useState,useEffect} from 'react'
import axios from 'axios'
import './App.css';
import Addtask from './Components/Addtask';
import Todolist from './Components/Todolist';
import Updatetask from './Components/Updatetask';

function App() {
  const[todolist,setTodoList]=useState([])
  const [tasktoUpdate,setTasktoUpdate]=useState([])
  const [showPopup,setShowPopup]=useState(false)
  useEffect(()=>{   //axios- middleware to connect front end
   axios.get('http://localhost:8000/api/tasks').then(res=>{
    setTodoList(res.data)
    // console.log(res.data)
   }).catch(err=>console.log(err))
  },[]) //[] - It will render only one time the page
  const addTask=newTask=>{
    setTodoList([...todolist,newTask])
  }

  const taskComplete=task=>{
      const newList= [...todolist]
      newList.forEach(item=>{
        if(item.id=== task.id){
          item.isComplete=task.isComplete
        }
      })
      setTodoList(newList)
  }

  const removeTask=task=>{
  const newList=todolist.filter(item=>!(item._id===task._id))
  setTodoList(newList)
  }
  const UpdateTask=task=>{
  const newList=[...todolist]
  newList.forEach(item=>{
    if(item._id===task._id){
      item.todo = task.todo
    }
  })
  setTodoList(newList)
  }
  return (
    <div>
      <Addtask addTask={addTask}/>
      <Todolist todolist={todolist} taskComplete={taskComplete} removeTask={removeTask} tasktoUpdate={task=>setTasktoUpdate(task)} showPopup={()=>
      setShowPopup(!showPopup)}/>
      {showPopup && <Updatetask task={tasktoUpdate} updatetask={UpdateTask}
      removePopup={()=>setShowPopup(!showPopup)}/>}
    </div>
  );
}

export default App;

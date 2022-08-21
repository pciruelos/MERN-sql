import React,{useEffect,useState} from 'react'
import {allTaskRequest} from '../api/tasks.api'
import Card from '../components/Card'

const TaskPage = () => {
  const [tasks, setTasks] = useState([])
  useEffect(() => {

    async function loadTasks() {
      const res = await allTaskRequest()
      setTasks(res.data)
    }
    loadTasks()

  }, [])

  function renderMain() {

    if (tasks.length === 0) return <h1>No tasks found</h1>

    return tasks.map( (t,i) => <Card task={t} key={i}/>)
  }
  
  return (
    <div>
      <h1>All task</h1>
      {tasks.length === 0 ? 'NO HAY TAREAS PENDIENTES' : `Tareas Pendientes:${tasks.length}`}
      <ul>
      {renderMain()}
      </ul>
    </div>
  )
}

export default TaskPage
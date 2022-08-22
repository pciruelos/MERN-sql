import React,{useEffect,useState} from 'react'
import Card from '../components/Card'
import {useTask} from '../context/TaskContext'

const TaskPage = () => {

  const {tasks,loadTasks} = useTask();
  
  useEffect(() => {
    loadTasks()
  }, [])

  function renderMain() {

    if (tasks.length === 0) return <h1>No tasks found</h1>

    return tasks.map( (t,i) => <Card task={t} key={i}/>)
  }
  
  return (
    <div>
      <h1 className='text-xl p-2 text-center'>All task are put it here!</h1>
      <h2 className='text-xl p-2'>
        {tasks.length === 0 ? 'NO HAY TAREAS PENDIENTES' : `Tareas Pendientes:${tasks.length}`}
        </h2>
      <ul>
      {renderMain()}
      </ul>
    </div>
  )
}

export default TaskPage
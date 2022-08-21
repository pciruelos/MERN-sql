import React from 'react'
import {deleteTaskRequest} from '../api/tasks.api'

const Card = ({task}) => {

    const handleDelete = async (id) => {
        try {
            const res = await deleteTaskRequest(id)
            console.log(res)
        } catch (error) {
            console.log(error)
        }
    }

  return (
    <li>
        <h2>{task.title}</h2>
        <p>{task.description}</p>
        <span>{task.done === 1 ? 'GG' : 'X'}</span>
        <span>{task.createAt}</span>
        <button onClick={handleDelete(task.id)}>Edit</button>
        <button>Delete</button>
        </li>
  )
}

export default Card
import React from "react";
import {useNavigate} from 'react-router-dom'
import { useTask } from "../context/TaskContext";

const Card = ({ task }) => {
  const { handleDelete,toggleTask } = useTask();
  const navigate = useNavigate()

  const handleDone = async() => {
    await toggleTask(task.id)

  }

  return (
    <li className="bg-black border-white m-2 shadow-xl rounded-xl">
      <h2 className="text-2xl font-bold text-center">{task.title}</h2>
      <p className="px-1">{task.description}</p>
      <span className="px-1">{task.done == 1 ? "✔️" : "❌"}</span>
      <span>Creada: {task.createAt}</span>
      <div className="flex justify-around bottom-0 mx-auto text-sm">
      <button className="flex mx-auto py-1 px-2 bg-red-400 rounded-xl m-1" onClick={() => handleDelete(task.id)}>Delete</button>
      <button className="flex mx-auto  py-1 px-2 bg-green-400 rounded-xl m-1" onClick={() => navigate(`/edit/${task.id}`) }>Edit</button>
      <button className="flex mx-auto  py-1 px-2 bg-blue-400 rounded-xl m-1" onClick={ handleDone }>toggle task</button>
      </div>
    </li>
  );
};

export default Card;

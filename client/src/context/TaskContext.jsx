import { createContext, useContext, useState } from "react";
import {
  allTaskRequest,
  deleteTaskRequest,
  createTaskRequest,
  getTaskRequest,
  updateRequest,
  toggleTaskRequest
} from "../api/tasks.api";

export const TaskContext = createContext();

export const useTask = () => {
  const context = useContext(TaskContext);
  if (!context) {
    throw new Error("useTask must be used within a taskcontextProvider");
  }
  return context;
};

export const TaskContextProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);

  async function loadTasks() {
    const res = await allTaskRequest();
    setTasks(res.data);
  };
  const handleDelete = async (id) => {
    try {
      const res = await deleteTaskRequest(id);
      setTasks(tasks.filter((task) => task.id !== id));
    } catch (error) {
      console.log(error);
    }
  };
  const createTask = async (task) => {
    try {
      const response = await createTaskRequest(task);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
  const getTask = async (id) => {
    try {
        const res = await getTaskRequest(id)
        return res.data
    } catch (error) {
        console.log(error);
      }
  };
  const updataTask = async (id, newFields) => {
    try {
        const res = await updateRequest(id, newFields)
        
    } catch (error) {
        console.log(error);
      }
  }
  const toggleTask = async (id) => {
    try {
        const taskFound = tasks.find((task) => task.id === id)
        await toggleTaskRequest(id,taskFound.done === 0 ? true : false)
        setTasks(
            tasks.map(task =>
                 task.id === id ?{ ...task, done: !task.done} : task
                 ))
        
    } catch (error) {
        console.log(error);
      }
  }

  return (
    <TaskContext.Provider
      value={{ tasks: tasks, loadTasks, handleDelete, createTask, getTask,updataTask,toggleTask }}
    >
      {children}
    </TaskContext.Provider>
  );
};

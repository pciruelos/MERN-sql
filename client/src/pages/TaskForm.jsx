import React,{useEffect,useState} from "react";
import { Formik, Form } from "formik";
import {useParams,useNavigate} from 'react-router-dom'
import {useTask} from '../context/TaskContext';


const TaskForm = () => {
  const navigate = useNavigate()
  const {createTask,getTask,updataTask} = useTask()
  const [task, setTask] = useState({title:"",description:""})
  const params = useParams()

  useEffect(() => {
    const loadEditTask = async() => {
      if (params.id){
    const task = await getTask(params.id);
    console.log(task)
    setTask({title:task.title,description:task.description})
    }
  };
      loadEditTask();
  }, [])
  

  return (
    <div className="">
      <h1 className="text-2xl font-bold text-black">{params.id ? "EDITING TASK" : "CREATE TASk"}</h1>
      <Formik
      initialValues={task}
      enableReinitialize={true}
      onSubmit={async (values,actions) => {
        console.log(values);
        if (params.id) {
          await updataTask(params.id,values)
          navigate('/')
        }else{
          await createTask(values)
          navigate('/')
        }
        setTask({title:"",description:""});
      } }>
       {({handleChange,handleSubmit, values, isSubmitting})=> (
         <Form onSubmit={handleSubmit} className="w-[90%] mx-auto text-black">
         <label className="flex mx-auto font-bold ">Title</label>
         <input className="flex mx-auto px-2 py-2 rounded-md w-full" type="text" name="title" placeholder="write a title" onChange={handleChange} value={values.title} />

         <label className="flex mx-auto font-bold ">description </label>
         <textarea
         className="flex mx-auto  px-2 py-2 rounded-md w-full"
           name="description"
           rows="10"
           placeholder="Write a descrption"
           onChange={handleChange} 
           value={values.description}
         ></textarea>
         <button className="flex mx-auto  py-1 px-2 bg-green-400 rounded-xl m-1 w-full text-center" type="submit" disabled={isSubmitting} >{isSubmitting ? "Saving..." : "Save"}</button>
       </Form>
       )}
      </Formik>
    </div>
  );
};

export default TaskForm;

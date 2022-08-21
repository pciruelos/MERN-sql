import React from "react";
import { Formik, Form } from "formik";

import {createTaskRequest} from '../api/tasks.api'

const TaskForm = () => {
  return (
    <div>
      <Formik
      initialValues={{
        title:'',
        description:'',
      }}
      onSubmit={async (values,actions) => {
        console.log(values);
        try {
            const response = await createTaskRequest(values);
            console.log(response);
            actions.resetForm();
        } catch (error) {
            console.log(error)
        }
      } }>
       {({handleChange,handleSubmit, values, isSubmitting})=> (
         <Form onSubmit={handleSubmit}>
         <label>Title</label>
         <input type="text" name="title" placeholder="write a title" onChange={handleChange} value={values.title} />

         <label>description </label>
         <textarea
           name="description"
           rows="10"
           placeholder="Write a descrption"
           onChange={handleChange} 
           value={values.description}
         ></textarea>
         <button type="submit" disabled={isSubmitting} >{isSubmitting ? "Saving..." : "Save"}</button>
       </Form>
       )}
      </Formik>
    </div>
  );
};

export default TaskForm;

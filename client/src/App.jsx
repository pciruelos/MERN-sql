import React from "react";
import { Route, Routes } from "react-router-dom";
import {TaskContextProvider} from './context/TaskContext'


import TaskForm from "./pages/TaskForm";
import TaskPage from "./pages/TaskPage";
import Notfound from './pages/Notfound'
import Nav from "./components/Nav";


function App() {
  return (
    <div className="bg-zinc-500 h-screen text-white">

<TaskContextProvider>
<Nav/>
    <Routes>
      <Route path="/" element={<TaskPage />} />
      <Route path="/new" element={<TaskForm />} />
      <Route path="/edit/:id" element={<TaskForm />} />
      <Route path="*" element={<Notfound />} />

    </Routes>
</TaskContextProvider>
    </div>
  );
}

export default App;

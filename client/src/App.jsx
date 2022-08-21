import React,{Fragment} from "react";
import { Route, Routes } from "react-router-dom";
import TaskForm from "./pages/TaskForm";
import TaskPage from "./pages/TaskPage";
import Notfound from './pages/Notfound'
import Nav from "./components/Nav";

function App() {
  return (
<Fragment>
<Nav/>
    <Routes>
      <Route path="/" element={<TaskPage />} />
      <Route path="/new" element={<TaskForm />} />
      <Route path="*" element={<Notfound />} />

    </Routes>
</Fragment>
  );
}

export default App;

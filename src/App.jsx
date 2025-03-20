import { useState } from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import Footer from "./components/Footer";

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTaskTitle, setNewTaskTitle] = useState("");
  const [newTaskDescription, setNewTaskDescription] = useState("");
  const [tempId, setTempId] = useState("");

  //Agregar la tarea nueva y guardar la edicion cuando ya existe 👌✅
  const handleAddAndEditTask = () => {
    if (newTaskTitle === "" && newTaskDescription === "") {
      null;
    } else {
      if (tasks.find((task) => task.date === tempId)) {
        const tareas = [...tasks];
        const tarea = tareas.find((task) => task.date === tempId);
        tarea.title = newTaskTitle;
        tarea.description = newTaskDescription;
        setTasks(tareas);
        setNewTaskTitle("");
        setNewTaskDescription("");
        setTempId("");
      } else {
        setTasks([
          ...tasks,
          {
            title: newTaskTitle.trim(),
            description: newTaskDescription.trim(),
            date: Date.now(),
            completed: "",
          },
        ]);
        setNewTaskTitle("");
        setNewTaskDescription("");
      }
    }
  };

  return (
    <>
      <section className="bg-blue-200 min-h-screen flex-1">
        <h1 className="text-4xl bg-purple-500 text-amber-950 font-bold text-center m-auto mb-7 p-4 rounded-b-4xl border-b-4 border-2 border-black max-w-5xl ">
          Task List
        </h1>
        <TaskForm
          tempId={tempId}
          newTaskTitle={newTaskTitle}
          newTaskDescription={newTaskDescription}
          onButtonClick={handleAddAndEditTask}
          onChangeTitle={(e) => setNewTaskTitle(e.target.value)}
          onChangeDescription={(e) => setNewTaskDescription(e.target.value)}
        />
        <h2
          className="text-3xl bg-purple-800
        text-amber-500 font-bold text-center  m-auto mt-7 p-4 rounded-3xl border-2 border-b-4 border-black max-w-4xl"
        >
          Tasks:
        </h2>
        <TaskList
          tasks={tasks}
          setTasks={setTasks}
          setNewTaskTitle={setNewTaskTitle}
          setNewTaskDescription={setNewTaskDescription}
          setTempId={setTempId}
        />
      </section>
      <section>
        <Footer />
      </section>
    </>
  );
}

export default App;

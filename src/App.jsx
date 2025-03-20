import { useState } from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const handleAddTask = () => {
    newTask === ""
      ? null
      : setTasks([
          ...tasks,
          { nombre: newTask.trim(), date: Date.now(), completed: "" },
        ]);
    setNewTask("");
  };

  return (
    <section className="bg-rose-200 ">
      <h1 className="text-4xl bg-yellow-700  text-amber-950 font-bold text-center m-7 p-4 rounded-4xl border-b-4 border-2 border-black ">
        Task List
      </h1>
      <TaskForm
        newTask={newTask}
        onButtonClick={handleAddTask}
        onChangeText={(e) => setNewTask(e.target.value)}
      />
      <h2
        className="text-3xl bg-yellow-500
        text-amber-950 font-bold text-center m-7 p-4 rounded-3xl border-2 border-b-4 border-black"
      >
        Tasks:
      </h2>
      <TaskList tasks={tasks} setTasks={setTasks} />
    </section>
  );
}

export default App;

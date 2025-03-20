const TaskList = ({ tasks, setTasks }) => {
  //cambiar el estado de completado de la tarea 👌✅
  const handleComplete = (ts, task) => {
    const tareas = [...tasks];
    tareas.find((ts) => task.date == ts.date).completed = true;
    setTasks(tareas);
    console.log(tasks);
  };

  const handleEdit = () => {
    //editar el contenido de la tarea
    5;
  };

  const handleDelete = () => {
    //eliminar la tarea
  };

  return (
    <div className="flex justify-center order-2 border-black p-4 m-7 rounded-4xl">
      <ul className="grid  grid-cols-3 ">
        {tasks.map((task) => (
          <li
            key={task.date}
            className="flex font-bold text-2 border-2 border-black p-6 rounded-2xl m-3  justify-between"
          >
            {task.nombre} {task.completed ? "✔️" : "❌"}
            <button
              disabled={task.completed}
              className="bg-green-800 text-white p-2 rounded-2xl m-0.5 disabled:bg-gray-500"
              onClick={(ts) => handleComplete(ts, task)}
            >
              Done
            </button>
            <button className="bg-rose-800 text-white p-2 rounded-2xl m-0.5">
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;

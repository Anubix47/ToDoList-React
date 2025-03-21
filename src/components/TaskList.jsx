const TaskList = ({
  tasks,
  setTasks,
  setTempId,
  setNewTaskTitle,
  setNewTaskDescription,
}) => {
  //cambiar el estado de completado de la tarea 👌✅
  const handleComplete = (ts, task) => {
    const tareas = [...tasks];
    tareas.find((ts) => task.date == ts.date).completed = true;
    setTasks(tareas);
    console.log(tasks);
  };

  //cargar los atributos de la tarea en el form para editarlos 👌✅
  const handleEdit = (ts, task) => {
    const tareas = [...tasks];
    tareas.find((ts) => task.date == ts.date);
    setNewTaskTitle(task.title);
    setNewTaskDescription(task.description);
    setTempId(task.date);
  };

  //Elimina la tarea seleccionada 👌✅
  const handleDelete = (ts, task) => {
    const tareas = tasks.filter((ts) => ts.date != task.date);
    setTasks(tareas);
    //eliminar la tarea
  };

  return (
    <div className="flex justify-center order-2 border-black p-4 rounded-4xl">
      {tasks.length === 0 ? (
        <p className="font-bold text-xl">Empty...</p>
      ) : (
        <ul className="grid  grid-cols-3 gap-4">
          {tasks.map((task) => (
            <li
              key={task.date}
              className="flex font-bold text-2 border-1 p-4 border-black border-b-4  rounded-2xl justify-between flex-wrap text-wrap container"
            >
              <div className="">
                <p>{task.title === "" ? task.description : task.title} </p>
                <p>{task.completed ? "✔️" : "❌"}</p>
                <button
                  className="bg-amber-500 text-white p-1 ml-0 rounded-sm m-0.5 font-medium"
                  onClick={(ts) => handleEdit(ts, task)}
                >
                  Edit
                </button>
                <button
                  disabled={task.completed}
                  className="bg-green-800 text-white p-1 rounded-sm disabled:bg-gray-500 ml-0 m-0.5 font-medium"
                  onClick={(ts) => handleComplete(ts, task)}
                >
                  Done
                </button>
                <button
                  className="bg-rose-800 text-white p-1 ml-0 rounded-sm m-0.5 font-medium"
                  onClick={(ts) => handleDelete(ts, task)}
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TaskList;

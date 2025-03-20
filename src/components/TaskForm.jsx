const TaskForm = ({ newTask, onChangeText, onButtonClick }) => {
  return (
    <div className="flex justify-center border-2 border-black p-4 m-7 rounded-4xl">
      <input
        placeholder="Task..."
        value={newTask}
        onChange={onChangeText}
        className="border-b-2 border-black mr-5  focus: outline-0 "
      />
      <button
        onClick={onButtonClick}
        className="border-2 p-3 rounded-2xl bg-amber-950 font-mono text-amber-50 disabled:bg-gray-400 transition-colors duration-300"
        disabled={newTask !== "" ? false : true}
      >
        Add
      </button>
    </div>
  );
};

export default TaskForm;

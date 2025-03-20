const TaskForm = ({
  newTaskTitle,
  newTaskDescription,
  onChangeTitle,
  onChangeDescription,
  onButtonClick,
  tempId,
}) => {
  return (
    <div className="flex flex-col gap-5 border-2 border-b-4 border-black p-4 m-auto max-w-2xs rounded-4xl">
      <input
        type="text"
        placeholder="Task Title"
        value={newTaskTitle}
        onChange={onChangeTitle}
        className="border-b-2 border-black m-3 focus: outline-0 p-0.5 font-medium"
        required={true}
        autoCapitalize="sentences"
      />
      <textarea
        type="text"
        rows={3}
        maxLength={100}
        placeholder="Description..."
        required={false}
        onChange={onChangeDescription}
        value={newTaskDescription}
        className="border-2 border-black m-2 focus: outline-0  rounded-2xl p-0.5 font-medium"
        autoCapitalize="sentences"
      />
      <button
        onClick={onButtonClick}
        className="border-2 border-black p-3 text-2xl rounded-2xl bg-purple-950 font-mono text-amber-100 disabled:bg-gray-400  transition-colors duration-300"
        disabled={
          newTaskTitle !== "" || newTaskDescription !== "" ? false : true
        }
      >
        {tempId != "" ? "Save" : "Add"}
      </button>
    </div>
  );
};

export default TaskForm;

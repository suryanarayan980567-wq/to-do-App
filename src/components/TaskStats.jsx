function TaskStats({ tasks }) {
  const completedTasks = tasks.filter(
    (task) => task.completed
  ).length;

  const remainingTasks = tasks.length - completedTasks;

  return (
    <div className="stats">

      <div className="stat-box">
        <h3>{tasks.length}</h3>
        <p>Total</p>
      </div>

      <div className="stat-box">
        <h3>{remainingTasks}</h3>
        <p>Remaining</p>
      </div>

      <div className="stat-box">
        <h3>{completedTasks}</h3>
        <p>Completed</p>
      </div>

    </div>
  );
}

export default TaskStats;
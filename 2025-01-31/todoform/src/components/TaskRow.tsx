import { Task } from "../interfaces";

interface TaskRowProps {
  task: Task;
  onEditTask: (task: Task) => void;
  onDeleteTask: (id: number) => void;
}

const TaskRow: React.FC<TaskRowProps> = ({ task, onEditTask, onDeleteTask }) => {
  const handleDelete = () => {
    if (window.confirm("Are you sure you want to delete this task?")) {
      onDeleteTask(task.id);
    }
  };

  return (
    <tr>
      <td>{task.task}</td>
      <td>{task.priority}</td>
      <td>{task.assignedTo}</td>
      <td>{task.date}</td>
      <td className="actions">
        <button onClick={() => onEditTask(task)}>Edit</button>
        <button className="danger" onClick={handleDelete}>Delete</button>
      </td>
    </tr>
  );
};

export default TaskRow;
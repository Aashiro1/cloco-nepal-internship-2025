import { Task } from "../interfaces";
import TaskRow from "./TaskRow";

interface TaskTableProps {
  tasks: Task[];
  onEditTask: (task: Task) => void;
  onDeleteTask: (id: number) => void;
}

const TaskTable: React.FC<TaskTableProps> = ({ tasks, onEditTask, onDeleteTask }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Task</th>
          <th>Priority</th>
          <th>Assigned To</th>
          <th>Date</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {tasks.map((task) => (
          <TaskRow key={task.id} task={task} onEditTask={onEditTask} onDeleteTask={onDeleteTask} />
        ))}
      </tbody>
    </table>
  );
};

export default TaskTable;
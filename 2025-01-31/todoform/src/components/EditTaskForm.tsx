import { useState, useEffect } from "react";
import { TaskFormData } from "../interfaces";

interface EditTaskFormProps {
  task: TaskFormData;
  onUpdateTask: (updatedTask: TaskFormData) => void;
  onCancel: () => void;
}


const EditTaskForm: React.FC<EditTaskFormProps> = ({ task, onUpdateTask, onCancel }) => {
  const [formData, setFormData] = useState<TaskFormData>(task);

  useEffect(() => {
    setFormData(task);
  }, [task]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onUpdateTask(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Task:</label>
        <input type="text" name="task" value={formData.task} onChange={handleChange} required />
      </div>
      <div>
        <label>Priority:</label>
        <select name="priority" value={formData.priority} onChange={handleChange}>
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
      </div>
      <div>
        <label>Assigned To:</label>
        <input type="text" name="assignedTo" value={formData.assignedTo} onChange={handleChange} required />
      </div>
      <div>
        <label>Date:</label>
        <input type="date" name="date" value={formData.date} onChange={handleChange} required />
      </div>
      <button type="submit">Update Task</button>
      <button type="button" className="danger" onClick={onCancel}>
        Cancel
      </button>
    </form>
  );
};

export default EditTaskForm;
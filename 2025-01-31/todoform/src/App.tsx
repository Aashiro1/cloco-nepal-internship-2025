import { useState } from "react";
import AddTaskForm from "./components/AddTaskForm";
import EditTaskForm from "./components/EditTaskForm";
import TaskTable from "./components/TaskTable";
import { Task, TaskFormData } from "./interfaces";
import "./App.css"; // Import the CSS file
const App: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [editingTask, setEditingTask] = useState<Task | null>(null);
  const [showAddForm, setShowAddForm] = useState(false);
  const [taskToDelete, setTaskToDelete] = useState<Task | null>(null);

  const addTask = (task: TaskFormData) => {
    const newTask: Task = {
      ...task, id: Date.now(),
      name: undefined
    };
    setTasks([...tasks, newTask]);
    setShowAddForm(false);
  };

  const updateTask = (updatedTask: TaskFormData) => {
    setTasks(tasks.map((task) => (task.id === editingTask?.id ? { ...task, ...updatedTask } : task)));
    setEditingTask(null);
  };

  const deleteTask = (id: number) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };
  const confirmDeleteTask = (id: number) => {
    setTasks(tasks.filter((task) => task.id !== id));
    setTaskToDelete(null);
  };

  const cancelDeleteTask = () => {
    setTaskToDelete(null);
  };

  return (
    <div>
      <h1>Todo List</h1>
      <button onClick={() => setShowAddForm(true)}>Add Task</button>
      {showAddForm && <AddTaskForm onAddTask={addTask} />}
      {editingTask && <EditTaskForm task={editingTask} onUpdateTask={updateTask} onCancel={() => setEditingTask(null)} />}
      <TaskTable tasks={tasks} onEditTask={setEditingTask} onDeleteTask={deleteTask} />
      {/* Add Task Modal */}
      {showAddForm && (
        <div className="modal-overlay">
          <div className="modal-container">
            <AddTaskForm
              onAddTask={addTask}
              // onClose={() => setShowAddForm(false)}
            />
          </div>
        </div>
      )}

      {/* Edit Task Modal */}
      {editingTask && (
        <div className="modal-overlay">
          <div className="modal-container">
            <EditTaskForm
              task={editingTask as TaskFormData}
              onUpdateTask={updateTask}
              onCancel={() => setEditingTask(null)}
            />
          </div>
        </div>
      )}
   
      {/* Delete Confirmation Modal */}
      {taskToDelete && (
        <div className="modal-overlay">
          <div className="modal-container">
            <div className="delete-confirmation-modal">
              <h2>Are you sure you want to delete this task?</h2>
              <p>{taskToDelete?.name}</p>
              <div className="modal-buttons">
                <button
                  className="confirm-delete-button"
                  onClick={() => taskToDelete && confirmDeleteTask(taskToDelete.id)}
                >
                  Yes, Delete
                </button>
                <button
                  className="cancel-delete-button"
                  onClick={cancelDeleteTask}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div> 
  );
};

export default App;

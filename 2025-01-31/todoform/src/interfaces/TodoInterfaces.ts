import { Task } from "../interfaces";

export interface Todo {
    id: string;
    task: string;
    priority: string;
    assignee: string;
    dueDate: string;
  }
  
  export interface TodoFormProps {
    onUpdateTask: (updatedTask: Task) => void;

    task: Task;
    onCancel: () => void;
    onSubmit: (todo: Omit<Todo, 'id'>) => void;
    onClose: () => void;
    initialData?: Todo;
    mode: 'add' | 'edit';
  }
  
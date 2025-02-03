// src/interfaces/Todo.tsx
export interface Todo {
    id: number;
    name: string;
    email: string;
    age: number;
    phone: string;
    text: string; // Task description
  }
   
 export interface EditProps {
    todo: Todo;
    onUpdate: (id: number, newText: string) => void;
  }
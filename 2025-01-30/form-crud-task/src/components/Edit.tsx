// src/components/Edit.tsx
// import { useState } from 'react';
import { Todo } from '../interfaces/Todo';
// import Update from './Update';

interface EditProps {
  todo: Todo;
  onUpdate: (id: number, newText: string) => void;
}

const Edit: React.FC<EditProps> = ({ todo, onUpdate }) => {
  const handleEdit = () => {
    const newText = prompt('Edit your task:', todo.text);
    if (newText !== null && newText.trim() !== '') {
      onUpdate(todo.id, newText);
    }
  };

  return <button onClick={handleEdit}>Edit</button>;
};

export default Edit;

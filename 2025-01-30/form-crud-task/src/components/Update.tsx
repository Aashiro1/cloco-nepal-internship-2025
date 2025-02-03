// src/components/Update.tsx
import { UpdateProps } from '../interfaces/UpdateProps';

const Update: React.FC<UpdateProps> = ({ todo, onUpdate }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newText = e.target.value;
    onUpdate(todo.id, newText);
  };

  return <input type="text" value={todo.text} onChange={handleChange} />;
};

export default Update;

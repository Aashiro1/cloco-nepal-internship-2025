// src/components/Delete.tsx
interface DeleteProps {
    id: number;
    onDelete: (id: number) => void;
  }
  
  const Delete: React.FC<DeleteProps> = ({ id, onDelete }) => {
    return <button onClick={() => onDelete(id)}>Delete</button>;
  };
  
  export default Delete;
  
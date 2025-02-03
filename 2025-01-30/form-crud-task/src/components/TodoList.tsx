import { Todo } from '../interfaces/Todo';
import Edit from './Edit';
import Delete from './Delete';

interface TodoListProps {
  todos: Todo[];
  onDelete: (id: number) => void;
  onUpdate: (id: number, newText: string) => void;
}

const TodoList: React.FC<TodoListProps> = ({ todos, onDelete, onUpdate }) => {
  return (
    <table border={1} style={{ width: '100%', marginTop: '20px', textAlign: 'left', borderCollapse: 'collapse' }}>
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Age</th>
          <th>Phone</th>
          <th>Task</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {todos.map((todo) => (
          <tr key={todo.id}>
            <td>{todo.name}</td>
            <td>{todo.email}</td>
            <td>{todo.age}</td>
            <td>{todo.phone}</td>
            <td>{todo.text}</td>
            <td style={{ display: 'flex', gap: '5px' }}>
              <Edit todo={todo} onUpdate={onUpdate} />
              <Delete id={todo.id} onDelete={onDelete} />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TodoList;

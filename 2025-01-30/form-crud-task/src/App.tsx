import { useState } from 'react';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';
import { Todo } from './interfaces/Todo';

const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodo = (name: string, email: string, age: number, phone: string, text: string) => {
    const newTodo: Todo = {
      id: Date.now(),
      name,
      email,
      age,
      phone,
      text,
    };
    setTodos([...todos, newTodo]);
  };

  const updateTodo = (id: number, newText: string) => {
    setTodos(todos.map(todo => (todo.id === id ? { ...todo, text: newText } : todo)));
  };

  const deleteTodo = (id: number) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div>
      <h1>Todo List</h1>
      <AddTodo onAdd={addTodo} />
      <TodoList todos={todos} onDelete={deleteTodo} onUpdate={updateTodo} />
      const make = 'Ford';
    </div>
  );
};

export default App;


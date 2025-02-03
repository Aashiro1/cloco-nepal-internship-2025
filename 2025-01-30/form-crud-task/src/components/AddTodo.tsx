import { useState } from 'react';

interface AddTodoProps {
  onAdd: (name: string, email: string, age: number, phone: string, task: string) => void;
}

const AddTodo: React.FC<AddTodoProps> = ({ onAdd }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState('');
  const [phone, setPhone] = useState('');
  const [task, setTask] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validation: Ensure required fields are filled
    if (!name.trim() || !email.trim() || !age.trim() || !phone.trim() || !task.trim()) {
      alert('Please fill out all fields.');
      return;
    }

    // Convert age to number and validate
    const ageNumber = parseInt(age, 10);
    if (isNaN(ageNumber) || ageNumber <= 0) {
      alert('Please enter a valid age.');
      return;
    }

    // Call the onAdd function with form values
    onAdd(name, email, ageNumber, phone, task);
    
    // Clear form fields after submission
    setName('');
    setEmail('');
    setAge('');
    setPhone('');
    setTask('');
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '10px', maxWidth: '300px' }}>
      <label>Name:</label>
      <input 
        type="text" 
        value={name} 
        onChange={(e) => setName(e.target.value)} 
        placeholder="Enter name"
      />
      <label>Email:</label>
      <input 
        type="email" 
        value={email} 
        onChange={(e) => setEmail(e.target.value)} 
        placeholder="Enter email"
      />
      <label>Age:</label>
      <input 
        type="number" 
        value={age} 
        onChange={(e) => setAge(e.target.value)} 
        placeholder="Enter age"
      />
      <label>Phone:</label>
      <input 
        type="tel" 
        value={phone} 
        onChange={(e) => setPhone(e.target.value)} 
        placeholder="Enter phone number"
      />
      <label>Task:</label>
      <input 
        type="text" 
        value={task} 
        onChange={(e) => setTask(e.target.value)} 
        placeholder="Enter task"
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default AddTodo;

// src/interfaces/UpdateProps.tsx
import { Todo } from './Todo';

export interface UpdateProps {
  todo: Todo;
  onUpdate: (id: number, newText: string) => void;
}

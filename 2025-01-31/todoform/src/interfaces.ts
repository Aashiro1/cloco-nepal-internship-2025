import { ReactNode } from "react";

// src/interfaces.ts
export interface Task {
    name: ReactNode;
    id: number;
    task: string;
    priority: string;
    assignedTo: string;
    date: string;
  }
  
  export interface TaskFormData {
    task: string;
    priority: string;
    assignedTo: string;
    date: string;
  }
  
  
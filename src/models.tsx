export interface Task {
  id: number;
  title: string;
  category: string;
  completed: boolean | null;
  date: string;
}

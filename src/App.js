import TodoInput from './components/Todos/TodoInput';
import TodoList from './components/Todos/TodoList';

export default function App() {
  return (
    <div className="container-fluid p-3">
      <TodoInput />
      <TodoList />
    </div> 
  );
}
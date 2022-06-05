import Todos from './components/Todos';
import NewTodo from './components/NewTodo';
import TodosContextProvider from './context/todos-context';

function App() {
  return (
    <TodosContextProvider>
      <div>
        <NewTodo />
        <Todos />
      </div>
    </TodosContextProvider>
  );
}

export default App;

import { useEffect, useState } from "react";
import { TodoProps } from "./components/todo";
import TodoWrapper from "./components/todoWrapper";
import axios from "axios";

function App() {
  const [todos, setTodos] = useState<TodoProps[]>([]);

  useEffect(() => {
    async function fetchTodos() {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/todos"
        );
        console.log("Response:", response.data);
        setTodos(response.data);
      } catch (error) {
        console.log(error);
      }
    }

    fetchTodos();
  }, []);

  return (
    <div className="max-w-[950px] mx-auto py-6">
      <h1 className="text-center font-bold text-3xl">Todo List</h1>
      <TodoWrapper todos={todos} />
    </div>
  );
}

export default App;

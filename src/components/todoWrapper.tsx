import Todo, { TodoProps } from "./todo";

interface TodosData {
  todos: TodoProps[];
}

const TodoWrapper: React.FC<TodosData> = ({ todos }) => {
  return (
    <div className="border flex-col overflow-scroll h-[75dvh] rounded-2xl p-4 ">
      {todos.length >= 1 ? (
        <>
          {todos.map(({ id, title, completed, userId }) => (
            <Todo id={id} title={title} completed={completed} userId={userId} />
          ))}
        </>
      ) : (
        <div className="self-center border-2 border-dashed py-8 rounded-lg">
          <p className="text-center text-gray-400">No todos yet...</p>
        </div>
      )}
    </div>
  );
};

export default TodoWrapper;

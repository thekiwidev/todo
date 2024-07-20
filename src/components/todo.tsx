import { useState } from "react";
import { FaRegCircleXmark } from "react-icons/fa6";

export interface TodoProps {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

const Todo: React.FC<TodoProps> = ({ title, completed, id }) => {
  const [isDone, setIsDone] = useState(completed);
  return (
    <div
      key={id}
      className={`border rounded-lg px-4 py-3 flex items-center gap-x-2 my-1 ${
        isDone && "border-green-500/30"
      }`}
    >
      <div className="flex items-center">
        <input
          type="checkbox"
          checked={isDone}
          onChange={() => setIsDone(!isDone)}
          name={`${id}`}
          className="h-5 w-5"
        />
      </div>
      <div className="flex-1">
        <p
          className={`font-bold ${
            isDone && "line-through text-gray-400"
          } cursor-pointer w-[max-content]`}
          onClick={() => setIsDone(!isDone)}
        >
          {title}
        </p>
      </div>
      <div className="bg-gray-200 p-2 rounded-full text-gray-500 hover:text-red-600 hover:bg-red-200 duration-300 cursor-pointer">
        <FaRegCircleXmark />
      </div>
    </div>
  );
};

export default Todo;

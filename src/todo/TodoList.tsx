import Todo from "./Todo";
import { ITodo } from "../interfaces";

interface ITodoListProps {
	todos: ITodo[];
	deleteTodo: (id: number) => void;
	updateTodo: (id: number) => void;
}

const TodoList = ({
	todos,
	deleteTodo,
	updateTodo,
}: ITodoListProps): JSX.Element => {
	return (
		<>
			{todos.map((todo) => (
				<Todo
					deleteTodo={deleteTodo}
					key={todo.id}
					updateTodo={updateTodo}
					{...todo}
				/>
			))}
		</>
	);
};

export default TodoList;

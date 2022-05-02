import { useState } from "react";

interface ITodoFormProps {
	createTodo: (title: string) => void;
}

const TodoForm = ({ createTodo }: ITodoFormProps): JSX.Element => {
	const [todoTitle, setTodoTitle] = useState("");

	const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
		e.preventDefault();
		createTodo(todoTitle);
		setTodoTitle("");
	};

	const handleOnChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
		setTodoTitle(e.target.value);
	};

	return (
		<form onSubmit={handleSubmit}>
			<input
				onChange={handleOnChange}
				placeholder="What do you need to do?"
				style={{
					width: "100%",
					backgroundColor: "#FFF",
					padding: 16,
					fontSize: 24,
					fontStyle: "italic",
					fontWeight: 300,
					border: "none",
				}}
				value={todoTitle}
			/>
		</form>
	);
};

export default TodoForm;

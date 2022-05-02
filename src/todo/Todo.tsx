import { Button, Checkbox, Container, Label } from "./styledComponents";

interface ITodoProps {
	id: number;
	title: string;
	completed: boolean;
	deleteTodo: (id: number) => void;
	updateTodo: (id: number) => void;
}

const Todo = ({
	id,
	title,
	completed,
	deleteTodo,
	updateTodo,
}: ITodoProps): JSX.Element => {
	const handleOnClick = () => {
		deleteTodo(id);
	};

	const handleOnComplete = () => {
		updateTodo(id);
	};

	return (
		<Container>
			<div>
				<Checkbox
					checked={completed}
					id={`${id}`}
					onChange={handleOnComplete}
					type="checkbox"
				/>
				<Label completed={completed} htmlFor={`${id}`}>
					{title}
				</Label>
			</div>
			<Button onClick={handleOnClick}>Delete</Button>
		</Container>
	);
};

export default Todo;

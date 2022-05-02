import { useState, useEffect } from "react";
import { ITodo } from "../interfaces";

import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

// const initialTodos = require("./todos.json");

type TStatus = "idle" | "loading" | "failure";
type TFeedback = JSX.Element | null;

const App = (): JSX.Element => {
	const [todos, setTodos] = useState<ITodo[] | null>(null);
	const [status, setStatus] = useState<TStatus>("idle");

	const createTodo = (title: string) => {
		const newTodo = {
			id: Date.now(),
			userId: Math.random(),
			completed: false,
			title,
		};

		const updatedTodos: ITodo[] = [newTodo, ...todos!];
		setTodos(updatedTodos);
	};

	const deleteTodo = (id: number) => {
		const updatedTodos = todos!.filter((todo) => todo.id !== id);
		setTodos(updatedTodos);
	};

	const updateTodo = (id: number) => {
		const updatedTodos = todos!.map((todo) => {
			if (todo.id === id) {
				return { ...todo, completed: !todo.completed };
			}

			return todo;
		});

		setTodos(updatedTodos);
	};

	const fetchTodos = async () => {
		setStatus("loading");
		try {
			const response = await fetch(
				"https://jsonplaceholder.typicode.com/todos"
			);
			const todos: ITodo[] = await response.json();

			if (!Object.keys(todos).length) {
				setTodos(null);
				setStatus("failure");
			} else {
				setTodos(todos);
				setStatus("idle");
			}
		} catch (error) {
			setStatus("failure");
		}
	};

	let feedback: TFeedback = null;

	if (status === "loading") {
		feedback = <p>Loading todos...</p>;
	} else if (status === "failure") {
		feedback = <p>An error occurred while loading todos...</p>;
	}

	useEffect(() => {
		fetchTodos();
	}, []);

	useEffect(() => {
		if (!todos) {
			document.title = "Todos (N/A)";
		} else {
			const unCompletedTodos = todos.reduce((a, c) => {
				if (!c.completed) {
					return (a += 1);
				} else {
					return a;
				}
			}, 0);

			document.title = `Todos (${unCompletedTodos})`;
		}
	});

	return (
		<>
			<TodoForm createTodo={createTodo} />
			{todos ? (
				<TodoList
					todos={todos}
					deleteTodo={deleteTodo}
					updateTodo={updateTodo}
				/>
			) : (
				<>
					{feedback}
					{status === "failure" && (
						<button onClick={fetchTodos}>Refetch</button>
					)}
				</>
			)}
		</>
	);
};

export default App;

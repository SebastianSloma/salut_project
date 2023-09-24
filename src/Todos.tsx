import { useState } from 'react';

const useTodos<T> = (): [T[], (value: T) => void] => {
	const [todos, setTodos] = useState<T[]>([]);

	const addTodo = (value: T) => {
		setTodos((curr) => [...curr, value]);
	};
	return [todos, addTodos];
};

export const Todos = () => {
	const [todos, addTodo] = useTodos<number>();

	const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		const elements = e.currentTarget
			.elements as typeof e.currentTarget.elements & {
			todo?: HTMLInputElement;
		};

		const todoValue = elements.todo?.value;

		if (!todoValue) {
			return;
		}

		addTodo(Number(todoValue));
	};

	return (
		<div>
			<form onSubmit={(e) => onSubmit(e)}>
				<input name='todo' />
				<button type='submit'>Submit</button>
			</form>
			<ul>
				{todos.map((todo, i) => (
					<li key={i}>{todo}</li>
				))}
			</ul>
		</div>
	);
};

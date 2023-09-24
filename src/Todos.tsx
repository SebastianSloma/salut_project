import { useState } from 'react';

export const Todos = () => {
	const [todos, setTodos] = useState<string[]>(['Buen Dia']);

	const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		const elements = e.currentTarget.elements as typeof e.currentTarget.elements & {
            todo?: HTMLInputElement
        };

        const todoValue = elements.todo?.value

        if(!todoValue){
            return
        }

        setTodos(curr =>[...curr,todoValue])
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

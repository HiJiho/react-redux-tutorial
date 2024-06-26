import { useSelector } from "react-redux";
import { changeInput, insert, toggle, remove } from "../modules/todos";
import Todos from "../components/Todos";
import useActions from "../lib/useActions";

const TodosContainer = () => {
	// 객체 비구조화 할당 문법
	const { input, todos } = useSelector(({ todos }) => ({
		input: todos.input,
		todos: todos.todos,
	}));

	const [onChangeInput, onInsert, onToggle, onRemove] = useActions(
		[changeInput, insert, toggle, remove],
		[]
	);

	return (
		<Todos
			input={input}
			todos={todos}
			onChangeInput={onChangeInput}
			onInsert={onInsert}
			onToggle={onToggle}
			onRemove={onRemove}
		/>
	);
};

export default TodosContainer;

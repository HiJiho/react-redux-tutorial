// 액션 타입 정의
const CHANGE_INPUT = "todos/CHANGE_INPUT"; // 인풋 값을 변경
const INSERT = "todos/insert"; // 새로운 todo 등록
const TOGGLE = "todos/TOGGLE"; // todo를 체크/체크해제
const REMOVE = "todos/REMOVE"; // todo를 제거

// 액션 생성 함수 정의
export const changeInput = (input) => ({
	type: CHANGE_INPUT,
	input,
});

let id = 3;
export const insert = (text) => ({
	type: INSERT,
	todo: {
		id: id++, // insert가 호출될 때마다 1씩 더해줌
		text,
		done: false,
	},
});

export const toggle = (id) => ({
	type: TOGGLE,
	id,
});

export const remove = (id) => ({
	type: REMOVE,
	id,
});

// 모듈 초기 상태, 그리고 스토어의 초기 상태
const initialState = {
	input: "",
	todos: [
		{
			id: 1,
			text: "리덕스 기초",
			done: true,
		},
		{
			id: 2,
			text: "리액트와 리덕스",
			done: false,
		},
	],
};

// 리듀서 함수 -> state를 수정하는 방법 정의
function todos(state = initialState, action) {
	switch (action.type) {
		case CHANGE_INPUT:
			return {
				...state,
				input: action.input,
			};
		case INSERT:
			return {
				...state,
				todos: state.todos.concat(action.todo),
			};
		case TOGGLE:
			return {
				...state,
				todos: state.todos.map((todo) =>
					todo.id === action.id ? { ...todo, done: !todo.done } : todo
				),
			};
		case REMOVE:
			return {
				...state,
				todos: state.todos.filter((todo) => todo.id !== action.id), // filter는 새로운 배렬 반환
			};
		default:
			return state;
	}
}

// 내보내기
export default todos;

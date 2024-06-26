import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";

// 액션 타입 정의
const CHANGE_INPUT = "todos/CHANGE_INPUT"; // 인풋 값을 변경
const INSERT = "todos/insert"; // 새로운 todo 등록
const TOGGLE = "todos/TOGGLE"; // todo를 체크/체크해제
const REMOVE = "todos/REMOVE"; // todo를 제거

// 액션 생성 함수 정의
export const changeInput = createAction(CHANGE_INPUT, (input) => input);

let id = 3;
export const insert = createAction(INSERT, (text) => ({
	id: id++, // insert가 호출될 때마다 1씩 더해줌
	text,
	done: false,
}));

// todo.id
export const toggle = createAction(TOGGLE, (id) => id);

// todo.id
export const remove = createAction(REMOVE, (id) => id);

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
const todos = handleActions(
	{
		[CHANGE_INPUT]: (state, { payload: input }) =>
			produce(state, (draft) => {
				draft.input = input;
			}),
		[INSERT]: (state, { payload: todo }) =>
			produce(state, (draft) => {
				draft.todos.push(todo);
			}),
		[TOGGLE]: (state, { payload: id }) =>
			produce(state, (draft) => {
				const todo = draft.todos.find((todo) => todo.id === id);
				todo.done = !todo.done;
			}),
		[REMOVE]: (state, { payload: id }) =>
			produce(state, (draft) => {
				const index = draft.todos.findIndex((todo) => todo.id === id);
				draft.todos.splice(index, 1);
			}),
	},
	// 스토어의 초기 상태
	initialState
);

// 내보내기
export default todos;

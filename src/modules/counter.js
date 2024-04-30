import { createAction, handleActions } from "redux-actions";

// 액션 타입 정의
// 문자열 안에 모듈 이름을 넣어 액션 이름 충돌 방지
const INCREASE = "counter/INCREASE";
const DECREASE = "counter/DECREASE";

// 액션 생성 함수 정의
export const increase = createAction(INCREASE);
export const decrease = createAction(DECREASE);

// 모듈 초기 상태, 그리고 스토어의 초기 상태
const initialState = {
	number: 0,
};

const counter = handleActions(
	// 첫번째 인자: 각 액션에 대한 업데이트 함수
	{
		[INCREASE]: (state, action) => ({ number: state.number + 1 }),
		[DECREASE]: (state, action) => ({ number: state.number - 1 }),
	},
	// 스토어의 초기 상태
	initialState
);

export default counter;

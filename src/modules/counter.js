// 액션 타입 정의
// 문자열 안에 모듈 이름을 넣어 액션 이름 충돌 방지
const INCREASE = "counter/INCREASE";
const DECREASE = "counter/DECREASE";

// 액션 생성 함수 정의
export const increase = () => ({ type: INCREASE });
export const decrease = () => ({ type: DECREASE });

// 모듈 초기 상태, 그리고 스토어의 초기 상태
const initialState = {
	number: 0,
};

// 리듀서 함수 -> state를 수정하는 방법 정의
function counter(state = initialState, action) {
	switch (action.type) {
		case INCREASE:
			return {
				number: state.number + 1,
			};
		case DECREASE:
			return {
				number: state.number - 1,
			};
		default:
			return state;
	}
}

export default counter;

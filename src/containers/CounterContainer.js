import { connect } from "react-redux";
import Counter from "../components/Counter";
import { increase, decrease } from "../modules/counter";

const CounterContainer = ({ number, increase, decrease }) => {
	return <Counter number={number} onIncrease={increase} onDecrese={decrease} />;
};

	// 스토어 상태를 컴포넌트의 props로 전달
const mapStateToProps = (state) => ({
	number: state.counter.number,
});

// 액션 생성 함수를 컴포넌트의 props로 전달
const mapDispatchToProps = (dispatch) => ({
	increase: () => {
		dispatch(increase()); // increase(): 액션 생성 함수
	},
	decrease: () => {
		dispatch(decrease()); // decrease(): 액션 생성 함수
	},
});
export default connect(mapStateToProps, mapDispatchToProps)(CounterContainer);

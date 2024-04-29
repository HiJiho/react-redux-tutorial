import { connect } from "react-redux";
import Counter from "../components/Counter";
import { increase, decrease } from "../modules/counter";

const CounterContainer = ({ number, increase, decrease }) => {
	return <Counter number={number} onIncrease={increase} onDecrese={decrease} />;
};

export default connect(
	// 스토어 상태를 컴포넌트의 props로 전달
	(state) => ({
		number: state.counter.number,
	}),
	// 액션 생성 함수를 객체 형태로 넣으면 내부적으로 bindActionCreators 작업을 해줌
	{
		increase,
		decrease,
	}
)(CounterContainer);

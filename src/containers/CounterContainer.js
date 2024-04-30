import { useDispatch, useSelector } from "react-redux";
import Counter from "../components/Counter";
import { increase, decrease } from "../modules/counter";

const CounterContainer = () => {
	// 스토어 상태 선택
	const number = useSelector((state) => state.counter.number);

	// dispatch 정의
	const dispatch = useDispatch();

	// 스토어 상태를 props로 전달
	return (
		<Counter
			number={number}
			onIncrease={() => dispatch(increase())}
			onDecrease={() => dispatch(decrease())}
		/>
	);
};

export default CounterContainer;

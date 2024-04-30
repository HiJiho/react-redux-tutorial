import { useSelector } from "react-redux";
import Counter from "../components/Counter";

const CounterContainer = () => {
	// 스토어 상태 선택
	const number = useSelector((state) => state.counter.number);
	// 스토어 상태를 props로 전달
	return <Counter number={number} />;
};

export default CounterContainer;

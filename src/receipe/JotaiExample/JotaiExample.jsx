import { useAtom } from 'jotai';
import { counterAtom } from './counterStore';

const TestComponent = () => {
  const [count] = useAtom(counterAtom);

  return <>{count}</>;
};

const JotaiExample = () => {
  // 액션으로 커스텀 훅 만들기는 생각보다 어렵네요. 이 정도로 써 주세요 ^^;;;
  const [count, setCount] = useAtom(counterAtom);

  return (
    <>
      <button onClick={() => setCount(count + 1)}>+</button>
      <span>{count}</span>
      <button onClick={() => setCount(count - 1)}>-</button>
      <TestComponent />
      <TestComponent />
      <TestComponent />
    </>
  );
};

export default JotaiExample;

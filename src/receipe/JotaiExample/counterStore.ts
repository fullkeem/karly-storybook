import { atom } from 'jotai';

export const counterAtom = atom(0);

// zustand 의 커스텀 훅 만들기가 그렇게 쉽지 않네요.
// 일단 없다고 생각하는게 좋겠습니다.
// https://jotai.org/docs/recipes/custom-useatom-hooks

// export const usePlusCount = () => {
//   return () => {
//     const [value, setCount] = useAtom(counterAtom);
//     setCount(value + 1);
//   };
// };

// export const useMinusCount = () => {
//   return () => {
//     const [value, setCount] = useAtom(counterAtom);

//     setCount(value - 1);
//   };
// };

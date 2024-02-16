/**
 *
 * @param {{
 *   children: React.ReactNode
 * }} props
 * @returns
 */
const 가격 = (props) => {
  // 여기에서 할인가격을 구해야 해요 x
  // 상태관리자에서 할인가격을 구하세요
  return (
    <p className="text-l-lg text-content">
      {props.children}
      <span>원</span>
    </p>
  );
};

export default 가격;

/**
 *
 * @param {{
 *   children: React.ReactNode
 * }} props
 * @returns
 */
const 헤드라인 = (props) => {
  return <h2 className="py-12 text-center text-black text-l-lg">{props.children}</h2>;
};

export default 헤드라인;

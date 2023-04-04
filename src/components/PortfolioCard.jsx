function PortfolioCard(props) {
  return (
    <li className="bg-purple-100 w-60 h-72 rounded-xl">
      <div className="bg-yellow-100 w-full h-1/2 flex justify-center items-center rounded-t-xl">
        {props.image}
      </div>
      <div className="text-xl font-bold mt-2 mx-2 ml-2">{props.title}</div>
      <div className="mt-2 mx-2">
        {props.additionalExplanation.map((v, i) => {
          return <div>{v}</div>;
        })}
      </div>
    </li>
  );
}

export default PortfolioCard;

// const PortfolioCard = () => {
//   return (
//     <li className="bg-purple-100 w-60 h-72 rounded-xl">
//       <div className="bg-yellow-100 w-full h-1/2 rounded-t-xl"></div>
//       <div className="text-xl font-bold mt-2 mx-2">프로젝트 제목</div>
//       <div className="mt-2 mx-2">
//         갑 든 예가 사막이다. 수 가진 고행을 따뜻한 곳으로 천고에 피다. 눈에
//         미인을 때까지 굳세게 그들의 바이며,
//       </div>
//     </li>
//   );
// };

// export default PortfolioCard;

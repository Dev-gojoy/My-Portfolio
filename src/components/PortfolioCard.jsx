import { Link } from "react-router-dom";

function PortfolioCard({ title, desc, image, index }) {
  const colors = [
    "bg-orange-300",
    "bg-yellow-300",
    "bg-green-300",
    "bg-teal-300",
    "bg-sky-300",
    "bg-indigo-300",
    "bg-purple-300",
    "bg-pink-300",
  ];

  return (
    <li className="relative bg-purple-100 w-60 h-72 rounded-xl">
      <div className="bg-yellow-100 w-full h-1/2 flex justify-center items-center rounded-t-xl">
        <img
          className="w-full h-full object-cover rounded-t-xl"
          src={`${process.env.PUBLIC_URL}/${image}`}
          alt="Project"
        />
      </div>
      <div className="text-xl font-bold mt-2 mx-2 ml-2">{title}</div>
      <div className="mt-2 mx-2">{desc}</div>
      <Link
        to={`/portfolio/${index}?title=${title}&desc=${desc}&image=${image}`}
      >
        <button
          className={`absolute bottom-0 right-0 m-4 px-4 py-2 rounded-full ${
            colors[index % colors.length]
          }`}
        >
          View
        </button>
      </Link>
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

import PortfolioCard from "./PortfolioCard";
import portFolioData from "../portFolioData.json";

function Portfolio() {
  return (
    <ul className="bg-indigo-100 max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-items-center gap-8 py-8">
      {portFolioData.map((v, i) => {
        return (
          <PortfolioCard
            key={i}
            image={v.image}
            title={v.title}
            additionalExplanation={v.additionalExplanation}
          />
        );
      })}
    </ul>
  );
}

export default Portfolio;

// const Portfolio = () => {
//   return (
//     <ul className="bg-indigo-100 max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-items-center gap-8 py-8">
//       <PortfolioCard />
//       <PortfolioCard />
//       <PortfolioCard />
//       <PortfolioCard />
//       <PortfolioCard />
//       <PortfolioCard />
//       <PortfolioCard />
//       <PortfolioCard />
//     </ul>
//   );
// };

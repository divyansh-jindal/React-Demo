import RestrauntCard from "./RestrauntCard";
import resList from "../utils/mockData";

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        {
          /* <RestrauntCard resData={resList[0]} /> */
          resList.map((restraunt) => (
            <RestrauntCard key={restraunt.info.id} resData={restraunt} />
          ))
        }
      </div>
    </div>
  );
};

export default Body;

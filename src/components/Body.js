import RestrauntCard from "./RestrauntCard";
import resList from "../utils/mockData";
import { useState } from "react";

const Body = () => {
  const [listOfRestraunts, setListOfRestraunts] = useState(resList);
  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRestraunts.filter(
              (res) => res.info.avgRating > 4
            );
            setListOfRestraunts(filteredList);
            // console.log(listOfRestraunts);
          }}
        >
          Top Rated Restraunts
        </button>
      </div>
      <div className="res-container">
        {
          /* <RestrauntCard resData={resList[0]} /> */
          listOfRestraunts.map((restraunt) => (
            <RestrauntCard key={restraunt.info.id} resData={restraunt} />
          ))
        }
      </div>
    </div>
  );
};

export default Body;

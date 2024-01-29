import RestrauntCard from "./RestrauntCard";
import resList from "../utils/mockData";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  const [listOfRestraunts, setListOfRestraunts] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();

    console.log(json);
    setListOfRestraunts(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  if (listOfRestraunts.length === 0) {
    return <Shimmer />;
  }
  return (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input type="text" className="search-box" />
          <button onClick={() => {}}>Search</button>
        </div>
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

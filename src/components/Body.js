import RestrauntCard from "./RestrauntCard";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import Shimmer from "./Shimmer";

const Body = () => {
  const [listOfRestraunts, setListOfRestraunts] = useState([]);
  const [filteredListOfRestraunts, setFilteredListOfRestraunts] = useState([]);
  const [searchText, setSearchText] = useState("");

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
    setFilteredListOfRestraunts(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false)
    return (
      <h1>Looks like you,re offline!! Please check ur Internet connection</h1>
    );

  if (listOfRestraunts.length === 0) {
    return <Shimmer />;
  }

  return (
    <div className="body">
      <div className="filter flex">
        <div className="search m-4 p-4">
          <input
            type="text"
            className="border border-solid border-black rounded-lg"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />

          <button
            className="px-4 py-1 bg-green-100 m-4 border rounded-lg"
            onClick={() => {
              // console.log(searchText);
              const filteredRes = listOfRestraunts.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredListOfRestraunts(filteredRes);
            }}
          >
            Search
          </button>
        </div>
        <div className="search m-4 p-4 flex items-center">
          <button
            className="px-4 py-1 bg-gray-100 border rounded-lg"
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
      </div>
      <div className="res-container flex flex-wrap">
        {
          /* <RestrauntCard resData={resList[0]} /> */
          filteredListOfRestraunts.map((restraunt) => (
            <Link
              key={restraunt.info.id}
              to={"/restaurants/" + restraunt.info.id}
            >
              <RestrauntCard resData={restraunt} />
            </Link>
          ))
        }
      </div>
    </div>
  );
};

export default Body;

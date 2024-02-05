import { CDN_URL } from "../utils/constants";

const styleCard = {
  backgroundColor: "#f0f0f0",
};

const RestrauntCard = (props) => {
  // console.log(props);
  const { resData } = props;

  const {
    name,
    cloudinaryImageId,
    cuisines,
    costForTwo,
    avgRatingString,
    sla,
  } = resData?.info;

  return (
    <div className="res-card m-4 p-4 w-[270px] rounded-lg bg-gray-100 transition-all duration-300 ease-in-out hover:bg-gray-200">
      <img
        className="res-logo rounded-lg"
        src={CDN_URL + cloudinaryImageId}
      ></img>
      <h3 className="font-bold py-4 text-lg text-center">{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{costForTwo}</h4>
      <h4>{avgRatingString} rating</h4>
      <h4>{sla.slaString}</h4>
    </div>
  );
};

export default RestrauntCard;

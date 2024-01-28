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
    <div className="res-card" style={styleCard}>
      <img className="res-logo" src={CDN_URL + cloudinaryImageId}></img>
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{costForTwo}</h4>
      <h4>{avgRatingString} rating</h4>
      <h4>{sla.slaString}</h4>
    </div>
  );
};

export default RestrauntCard;

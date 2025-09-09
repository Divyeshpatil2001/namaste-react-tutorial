import { useContext } from "react";
import UserContext from "../utils/userContext";

const RestaurantCard = ({ resData }) => {
  const {
    name,
    cuisines,
    avgRating,
    sla,
    costForTwo,
    cloudinaryImageId,
  } = resData.info;

  const {loggedInUser} = useContext(UserContext);
  console.log(loggedInUser)
  return (
    <div className="m-4 p-4 w-[250px] bg-gray-200 rounded-lg">
      <img
        className="rounded-lg"
        src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${cloudinaryImageId}`}
        alt={`${name}`}
      />
      <h3 className="font-boldpy-4 text-lg">{name}</h3>
      <h4 className="font-boldpy-4 text-lg">{cuisines.join(", ")}</h4>
      <h4 className="font-boldpy-4 text-lg">{avgRating} stars</h4>
      <h4 className="font-boldpy-4 text-lg">
        Delivery Time: {sla.deliveryTime} mins
      </h4>
      <h4 className="font-boldpy-4 text-lg">
        context data: {loggedInUser} mins
      </h4>
      <h4 className="font-boldpy-4 text-lg">Cost for Two: {costForTwo}</h4>
    </div>
  );
};

export const WithPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-black text-white m-2 p-2 rounded-lg">
          Promoted
        </label>
        <RestaurantCard {...props}/>
      </div>
    )
  }
}

export default RestaurantCard;

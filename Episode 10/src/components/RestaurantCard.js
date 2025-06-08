const RestaurantCard = ({ resData }) => {
  const {
    name,
    cuisines,
    avgRating,
    sla,
    costForTwo,
    cloudinaryImageId,
  } = resData.info;
  
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
      <h4 className="font-boldpy-4 text-lg">Delivery Time: {sla.deliveryTime} mins</h4>
      <h4 className="font-boldpy-4 text-lg">Cost for Two: {costForTwo}</h4>
    </div>
  );
};

export default RestaurantCard;

const RestaurantCard = (props) => {
  // console.log(props.resData)
  const { resName, resimage, rescuisine, resstars, reseta } = props.resData;
  return (
    <div className="res-card">
      <img className="res-logo" src={resimage} />
      <h3>{resName}</h3>
      <h4>{rescuisine.join(", ")}</h4>
      <h4>{resstars} stars</h4>
      <h4>{reseta} minutes</h4>
    </div>
  );
};

export default RestaurantCard;

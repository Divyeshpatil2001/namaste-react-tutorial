import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);
  const [showIndex,setShowIndex] = useState(0);

  if (!resInfo) return <Shimmer />;

  const restaurantCard = resInfo.cards?.find((card) => card.card?.card?.info);

  const { name, cuisines, costForTwoMessage } =
    restaurantCard?.card?.card?.info || {};

  // Safely access itemCards
  const itemSection = resInfo.cards?.find(
    (card) =>
      card.groupedCard?.cardGroupMap?.REGULAR?.cards &&
      Array.isArray(card.groupedCard.cardGroupMap.REGULAR.cards)
  );

  const menuCards =
    itemSection?.groupedCard?.cardGroupMap?.REGULAR?.cards || [];

  console.log(menuCards);

  const allItemCards = menuCards
    .flatMap((section) => section.card?.card?.itemCards || [])
    .filter(Boolean); // removes undefined/null entries

  // c.card?.card -> instead of this - ["c"].["card"]?."[card]" - this way also we can extarct value data object if ther is @type name var then direct geting value is getting error ass it is not works with js syntax for var name so we can use it like this - ["@type"] - it will works fine.
  const categories = menuCards.filter(
    (c) =>
      c.card?.card?.["@type"] ===
      "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  );

  console.log("menu::", categories);

  return (
    <div className="text-center">
      <h1 className="font-bold my-6 text-2xl">{name}</h1>
      <p className="font-bold text-lg">
        {cuisines?.join(", ")} - {costForTwoMessage}
      </p>
      {/* categories accordian */}
      {/* controlled component */}
      {categories.map((category, index) => (
        <RestaurantCategory
          key={category.card.card.title}
          data={category?.card?.card}
          showIndex={showIndex === index && true}
          setShowIndex={() => setShowIndex(index)}
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;

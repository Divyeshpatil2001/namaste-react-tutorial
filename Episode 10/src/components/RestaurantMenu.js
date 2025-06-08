import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
    const { resId } = useParams();
    const resInfo = useRestaurantMenu(resId);

    if (!resInfo) return <Shimmer />;

    const restaurantCard = resInfo.cards?.find(
        (card) => card.card?.card?.info
    );

    const { name, cuisines, costForTwoMessage } = restaurantCard?.card?.card?.info || {};

    // Safely access itemCards
    const itemSection = resInfo.cards?.find(
        (card) =>
            card.groupedCard?.cardGroupMap?.REGULAR?.cards &&
            Array.isArray(card.groupedCard.cardGroupMap.REGULAR.cards)
    );

    const menuCards = itemSection?.groupedCard?.cardGroupMap?.REGULAR?.cards || [];

    const allItemCards = menuCards
        .flatMap((section) => section.card?.card?.itemCards || [])
        .filter(Boolean); // removes undefined/null entries

    return (
        <div className="menu">
            <h1>{name}</h1>
            <p>{cuisines?.join(", ")} - {costForTwoMessage}</p>
            <h2>Menu</h2>
            <ul>
                {allItemCards.length ? allItemCards.map((item,index) => (
                    <li key={`${item.card.info.id}-${index}`}>
                        {item.card.info.name} - {" Rs."}
                        {item.card.info.price / 100 || item.card.info.defaultPrice / 100}
                    </li>
                )) : <li>No items found</li>}
            </ul>
        </div>
    );
};

export default RestaurantMenu;

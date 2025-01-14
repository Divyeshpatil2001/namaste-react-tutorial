import { useState,useEffect } from "react";
import Shimmer from "./Shimmer";
import { MENU_API } from "../utils/constant";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
    const [resInfo,setResInfo] = useState(null);
    const { resId } = useParams();
    useEffect(() => {
        fetchMenu();
    },[])
    const fetchMenu = async () => {
        try{
            const data = await fetch(MENU_API + resId);
            const json = await data.json();
            // console.log(json.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[1].card.card.itemCards);
            // const menuData = json.data.cards[2].card.card.info;
            await setResInfo(json.data);
            // const menuTitle = json.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[1].card.card.title
            // console.log(resInfo.cards[2].card.card.info)
        }
        catch (error) {
            console.error("Error fetching menu:", error);
        }
    }
    
    if (resInfo == null) return <Shimmer />
    
    const {name , cuisines , costForTwoMessage} = resInfo.cards[2].card.card.info
    
    const allItemCards = resInfo.cards[4].groupedCard.cardGroupMap.REGULAR.cards[1].card.card.itemCards;
    
    return(
        <div className="menu">
            <h1>{name}</h1>
            <p>{cuisines.join(", ")} - {costForTwoMessage}</p>
            <h2>Menu</h2>
            <ul>
                {allItemCards.map(item => (
                    <li key={item.card.info.id}>{item.card.info.name} - {" Rs."}
                    { item.card.info.price/100 || item.card.info.defaultPrice/100 }</li>
                ))}
            </ul>
        </div>
    )
}

export default RestaurantMenu;
import RestaurantCard from "./RestaurantCard";
import { RES_LIST } from "../utils/constant";

const Body = () => {
    return (<div className="body">
        <div className="search">Search</div>
        <div className="res-container">
            {RES_LIST.map(restaurant => (
                <RestaurantCard key={restaurant.id} resData={restaurant}/>
            ))}
           
        </div>
    </div>)
}

export default Body;
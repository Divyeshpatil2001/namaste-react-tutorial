import RestaurantCard from "./RestaurantCard";
import { RES_LIST } from "../utils/constant";
import {useState} from "react"
1
// let RES_LIST = [
//     {
//       id: 0,
//       resName: "Meghana Foods",
//       resimage:
//         "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/FOOD_CATALOG/IMAGES/CMS/2024/4/9/dabf99d0-5c51-480b-9895-bce02d2bde9f_e9ffa04d-e57a-4548-a085-0cc9c2e465cc.JPG",
//       rescuisine: ["Biryani", "South Indian"],
//       resstars: 4.5,
//       reseta: 45,
//     },
//     {
//       id: 1,
//       resName: "KFC",
//       resimage:
//         "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/fyubs4fywivonmhbv8zw",
//       rescuisine: ["crispy", "Non veg"],
//       resstars: 4.6,
//       reseta: 38,
//     },
//     {
//       id: 2,
//       resName: "McDonald's",
//       resimage:
//         "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/FOOD_CATALOG/IMAGES/CMS/2024/6/27/c31d6067-a3b0-4d8d-acef-c25aeb4dc418_05cf481e-e52c-4645-8899-80783e9f5fcb.JPG",
//       rescuisine: ["Burgers", "wrap", "franky"],
//       resstars: 3.3,
//       reseta: 35,
//     },
//     {
//       id: 3,
//       resName: "Dominos",
//       resimage:
//         "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/lln3zxpll8pshaeqrgr9",
//       rescuisine: ["Pizza", "coldcoffee"],
//       resstars: 3,
//       reseta: 20,
//     },
//   ];

const Body = () => {
    // local state var - super powerfull var
    const [listofRestaurants,setListOfRestaurants] = useState(RES_LIST)
    return (<div className="body">
        <div className="filter">
            <button className="filter-btn" onClick={() => {
                filtered_list = RES_LIST.filter(res => res.resstars > 4)
                setListOfRestaurants(filtered_list)
            }}>Top Rated Restaurants</button>
        </div>
        <div className="res-container">
            {listofRestaurants.map(restaurant => (
                <RestaurantCard key={restaurant.id} resData={restaurant}/>
            ))}
           
        </div>
    </div>)
}

export default Body;
import RestaurantCard from "./RestaurantCard";
import { RES_LIST } from "../utils/constant";
import {useState,useEffect} from "react"
import Shimmer from "./Shimmer";

const Body = () => {
    // usestate give arr in which two thing in which first is name and other is setname 
    const [listofRestaurants,setListOfRestaurants] = useState([]);
    const [searchRestaurants,setSearchRestaurants] = useState([]);
    // console.log("use 12called")
    // after the components rendered useeffect call back function will called
    // loads => app => render components => when api data come then useffect throough shown in ui (better uix) 
    useEffect(() => {
        console.log("useffect called")
        fetchData();
    },[]);//first argument is call back function and second argument is dependency array
    console.log("use 11called")

    const fetchData = async () => {
        try {
          const response = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.0203104&lng=72.4704556&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
          );
          const data = await response.json();
        //   optional chaining
          const restaurants =
            data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
      
          if (restaurants) {
            setListOfRestaurants(restaurants);
          } else {
            console.error("Failed to fetch restaurants.");
          }
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      };

    // conditional rendering
    // if (listofRestaurants.length == 0) {
    //   return <Shimmer />
    // }

    return listofRestaurants.length == 0 ? <Shimmer /> : (<div className="body">
        <div className="filter">
            <div className="search-box">
              <input className="search-input" value={searchRestaurants} onChange={(e) => {setSearchRestaurants(e.target.value)}} />
              <button className="search-btn" onClick={
                () => {
                  const filteredData = listofRestaurants.filter(res => res.info.name.toLowerCase().includes(searchRestaurants.trim().toLowerCase()))
                  console.log(filteredData)
                  setListOfRestaurants(filteredData)
              }}>Search</button>
            </div>
            <button className="filter-btn" onClick={() => {
                filtered_list = listofRestaurants.filter(res => res.info.avgRating == 4.2)
                setListOfRestaurants(filtered_list)
            }}>Top Rated Restaurants</button>
        </div>
        <div className="res-container">
            {listofRestaurants.map(restaurant => (
                <RestaurantCard key={restaurant.info.id} resData={restaurant}/>
            ))}
           
        </div>
    </div>)
}

export default Body;
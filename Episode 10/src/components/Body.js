import RestaurantCard from "./RestaurantCard";
import { RES_LIST } from "../utils/constant";
import {useState,useEffect} from "react"
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
    // usestate give arr in which two thing in which first is name and other is setname 
    const [listofRestaurants,setListOfRestaurants] = useState([]);
    const [filterRestaurants,setFilterRestaurants] = useState([]);
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
            setFilterRestaurants(restaurants);
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

    const onlineStatus = useOnlineStatus();
    if (onlineStatus === false) return (
      <h1>
        Looks like you're offline !!! pleasse check your connection
      </h1>
    )

    return listofRestaurants.length == 0 ? <Shimmer /> : (<div className="body">
        <div className="filter flex">
            <div className="search-box m-4 p-4">
              <input className="border border-solid border-black" value={searchRestaurants} onChange={(e) => {setSearchRestaurants(e.target.value)}} />
              <button className="px-4 py-2 bg-green-100 m-4 rounded-lg" onClick={
                () => {
                  const filteredData = listofRestaurants.filter(res => res.info.name.toLowerCase().includes(searchRestaurants.toLowerCase()))
                  console.log(filteredData)
                  setFilterRestaurants(filteredData)
              }}>Search</button>
            </div>
            <div className="m-4 p-4 flex items-center">
            <button className="px-4 py-2 bg-gray-100" onClick={() => {
                filtered_list = listofRestaurants.filter(res => res.info.avgRating == 4.2)
                setListOfRestaurants(filtered_list)
            }}>Top Rated Restaurants</button>
            </div>
        </div>
        <div className="flex flex-wrap">
            {filterRestaurants.map(restaurant => (
              <Link key={restaurant.info.id} to={"/restaurants/"+restaurant.info.id}>
                <RestaurantCard resData={restaurant}/>
                </Link>
            ))}
           
        </div>
    </div>)
}

export default Body;
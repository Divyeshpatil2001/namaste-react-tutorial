import { useEffect } from "react";
import { MENU_API } from "./constant";

const useRestaurantMenu = (resId) => {
    const [resInfo,setResInfo] = useState(null);
    useEffect(() => {
        fetchMenu();
    },[])
    const fetchMenu = async () => {
        try{
            const data = await fetch(MENU_API + resId);
            const json = await data.json();
            await setResInfo(json.data);
        }
        catch (error) {
            console.error("Error fetching menu:", error);
        }
    }
    return resInfo
}

export default useRestaurantMenu;
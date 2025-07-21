import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data }) => {
  console.log(data);
  const [show,setShow] = useState(false);
  const handleClick = () => {
    setShow(!show)
  }
  // now item list i want to show on click means - its depends upon data layer has state variable.
  // state varaible will decide itemlist will display or not.
  return (
    <div>
      <div className="bg-gray-100 shadow-lg w-6/12 m-auto my-4  p-4">
        <div className=" flex justify-between cursor-pointer" onClick={handleClick}>
          <span className="font-bold text-lg">
            {data.title} ({data.itemCards.length})
          </span>
          <span>⬇️</span>
        </div>

        {show && <ItemList items={data.itemCards} />}
      </div>
    </div>
  );
};

export default RestaurantCategory;

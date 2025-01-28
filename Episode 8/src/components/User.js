import { useEffect, useState } from "react";

const  User = ({name,location}) => {
    const [count,setCount] = useState(0);
    const [count2,setCount2] = useState(1);

    useEffect(()=> {
        const timer = setInterval(() => {
            console.log("useeffect")
        }, 1000);
        // this called when component goes away or remove from dom like unmounting
        return () => {clearInterval(timer)}
    },[])
    return (
        <div className="user-card">
                <h1>functional component</h1>
                <h1>count = {count}</h1>
                <h1>count2 = {count2}</h1>
                <h2>Name: {name}</h2>
                <h3>Location: {location}</h3>
                <h4>Contact: @patil</h4>
        </div>
    )
}

export default User;
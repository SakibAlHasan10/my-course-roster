import { useEffect } from "react";
import { useState } from "react";

const AllCard = () => {
    const [allCard, setAllCard] = useState([])
    useEffect(()=>{
        fetch('data.json')
        .then(res => res.json())
        .then(data => console.log(data))
    },[])
    return (
        <div>
            <h2>Hello banh</h2>
        </div>
    );
};

export default AllCard;

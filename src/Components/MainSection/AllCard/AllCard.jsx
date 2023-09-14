import { useEffect } from "react";
import { useState } from "react";
import Cards from "./Cards";

const AllCard = () => {
    const [allCard, setAllCard] = useState([])
    useEffect(()=>{
        fetch('data.json')
        .then(res => res.json())
        .then(data => setAllCard(data))
    },[])
    return (
        <div className="">
            <Cards allCard={allCard}></Cards>
        </div>
    );
};

export default AllCard;

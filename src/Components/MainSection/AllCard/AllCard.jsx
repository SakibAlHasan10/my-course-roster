import { useEffect } from "react";
import { useState } from "react";
import Cards from "./Cards";

const AllCard = () => {
    const [allCard, setAllCard] = useState([])
    useEffect(()=>{
        fetch('data.json')
        .then(res => res.json())
        .then(data => setAllCard(data))
        console.log(allCard)
    },[])
    return (
        <div>
            {
                // allCard.map((card))
            }
            <Cards allCard={allCard}></Cards>
        </div>
    );
};

export default AllCard;

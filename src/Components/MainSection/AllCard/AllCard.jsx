import PropTypes from 'prop-types'
import { useEffect } from "react";
import { useState } from "react";
import Cards from "./Cards";

const AllCard = ({handleCredit}) => {
    const [allCard, setAllCard] = useState([])
    useEffect(()=>{
        fetch('data.json')
        .then(res => res.json())
        .then(data => setAllCard(data))
    },[])
    return (
        <div className="">
            <Cards 
            handleCredit={handleCredit}
            allCard={allCard}></Cards>
        </div>
    );
};
AllCard.propTypes ={
    handleCredit : PropTypes.func.isRequired
}
export default AllCard;

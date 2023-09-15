import { useState } from "react";
import AllCard from "./AllCard/AllCard";
import Cart from "./Cart/Cart";
import {ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

let myCredit = 0;
let coursePrice = 0
const MainSection = () => {
    let totalCredit = 20;
    const [credit, setCredit] = useState(totalCredit)
    const [cartSide, setCartSide] = useState([])
    const handleCredit = card =>{
        const findMultipleCard = cartSide.find(cardInArray => cardInArray.id == card.id)
        if(findMultipleCard){
            toast.warning('This course is already selected.',
            {position: toast.POSITION.TOP_CENTER})
             return
        }
        const {course_credit}=card
        const gainCredit = credit - course_credit
        if(gainCredit < 0){
            return toast.warning('Your credit is low, This course credit.',{
                position: toast.POSITION.TOP_CENTER})
        }
        setCredit(gainCredit)
        setCartSide([...cartSide, card])
        myCredit = myCredit + parseInt(card.course_credit) 
        coursePrice = coursePrice + parseInt(card.course_price)
    }
    console.log(coursePrice)
    return (
        <div className="xl:flex justify-between gap-5 max-w-screen-xl mx-auto px-8 md:px-8 pb-20">
            <div className="xl:w-3/4">
                <ToastContainer/>
                <AllCard 
                handleCredit={handleCredit}
                ></AllCard>
            </div>
            <div className="xl:1/4 mt-5 xl:mt-0">
                <Cart credit={credit}
                coursePrice={coursePrice}
                myCredit={myCredit}
                cartSide={cartSide}
                ></Cart>
            </div>
        </div>
    );
};

export default MainSection;
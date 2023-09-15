import { useState } from "react";
import AllCard from "./AllCard/AllCard";
import Cart from "./Cart/Cart";
import {ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

// toast.configure()
const MainSection = () => {
    let totalCredit = 20;
    const [credit, setCredit] = useState(totalCredit)
    const [cartSide, setCartSide] = useState([])
    const handleCredit = card =>{
        const findMultipleCard = cartSide.find(cardInArray => cardInArray.id == card.id)
        if(findMultipleCard){
            toast.warning('Hello Geeks 6',
            {position: toast.POSITION.TOP_CENTER})
             return
            
        }
        const {course_credit}=card
        const gainCredit = credit - course_credit
        if(gainCredit < 0){
            return toast.warning('your credit is low this course',{
                position: toast.POSITION.TOP_CENTER})
        }
        console.log(gainCredit)
        setCredit(gainCredit)
        // console.log(cartSide, card)
        setCartSide([...cartSide, card])
    }
    // console.log(cartSide)
    return (
        <div className="flex justify-between gap-5 max-w-screen-xl mx-auto px-8 pb-20">
            <div className="w-3/4">
                <ToastContainer/>
                <AllCard 
                handleCredit={handleCredit}
                ></AllCard>
            </div>
            <div className="1/4">
                <Cart credit={credit}
                cartSide={cartSide}
                ></Cart>
            </div>
        </div>
    );
};

export default MainSection;
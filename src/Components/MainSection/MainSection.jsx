import { useState } from "react";
import AllCard from "./AllCard/AllCard";
import Cart from "./Cart/Cart";

const MainSection = () => {
    let totalCredit = 20;
    const [credit, setCredit] = useState(totalCredit)
    const handleCredit = card =>{
        const {course_credit}=card
        const gainCredit = credit - course_credit
        setCredit(gainCredit)
        console.log(course_credit,gainCredit, credit)
    }
    return (
        <div className="flex justify-between gap-5 max-w-screen-xl mx-auto px-8 pb-20">
            <div className="w-3/4">
                <AllCard 
                handleCredit={handleCredit}
                ></AllCard>
            </div>
            <div className="1/4">
                <Cart credit={credit}
                ></Cart>
            </div>
        </div>
    );
};

export default MainSection;
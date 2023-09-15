import { useState } from "react";
import AllCard from "./AllCard/AllCard";
import Cart from "./Cart/Cart";

const MainSection = () => {
    const [credit, setCredit] = useState(0)
    const handleCredit = card =>{
        const {course_credit}=card
        console.log(course_credit)
    }
    return (
        <div className="flex justify-between gap-5 max-w-screen-xl mx-auto px-8 pb-20">
            <div className="w-3/4">
                <AllCard 
                handleCredit={handleCredit}
                ></AllCard>
            </div>
            <div className="1/4">
                <Cart></Cart>
            </div>
        </div>
    );
};

export default MainSection;
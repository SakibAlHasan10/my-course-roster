import AllCard from "./AllCard/AllCard";
import Cart from "./Cart/Cart";

const MainSection = () => {
    return (
        <div className="flex justify-between">
            <AllCard></AllCard>
            <Cart></Cart>
        </div>
    );
};

export default MainSection;
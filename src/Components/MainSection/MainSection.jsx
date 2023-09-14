import AllCard from "./AllCard/AllCard";
import Cart from "./Cart/Cart";

const MainSection = () => {
    return (
        <div className="flex justify-between gap-5 max-w-screen-xl mx-auto px-8">
            <div className="w-3/4">
                <AllCard></AllCard>
            </div>
            <div className="1/4">
                <Cart></Cart>
            </div>
        </div>
    );
};

export default MainSection;
import CartContainer from "./CartContainer";

const Cart = () => {
    return (
        <div className=" bg-white p-5 rounded-xl ">
            <div className="w-full border-b-2 border-solid border-[#1c1b1b33]">
                <h2 className="text-lg font-bold text-blue-500 mb-3">Credit Hour Remaining {20} hr</h2>
            </div>
            <CartContainer></CartContainer>
        </div>
    );
};

export default Cart;
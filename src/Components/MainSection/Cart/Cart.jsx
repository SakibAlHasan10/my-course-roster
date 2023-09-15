import CartContainer from "./CartContainer";

const Cart = ({credit, cartSide}) => {
    return (
        <div className=" bg-white p-5 rounded-xl w-full">
            <div className="w-full text-left border-b-2 border-solid border-[#1c1b1b33]">
                <h2 className="text-lg font-bold text-blue-500 mb-3">Credit Hour Remaining {credit} hr</h2>
            </div>
            <CartContainer 
            // credit={credit}
            cartSide={cartSide}
            ></CartContainer>
        </div>
    );
};

export default Cart;
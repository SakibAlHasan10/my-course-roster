import PropTypes from 'prop-types';
import CartContainer from "./CartContainer";

const Cart = ({credit, cartSide, myCredit, coursePrice}) => {
    // console.log(myCredit, credit, cartSide)
    return (
        <div className=" bg-white p-5 rounded-xl w-full">
            <div className="w-full text-left border-b-2 border-solid border-[#1c1b1b33]">
                <h2 className="text-lg font-bold text-blue-500 mb-3">Credit Hour Remaining {credit} hr</h2>
            </div>
            <CartContainer 
            coursePrice={coursePrice}
            myCredit={myCredit}
            cartSide={cartSide}
            ></CartContainer>
        </div>
    );
};
Cart.propTypes ={
    myCredit : PropTypes.number.isRequired,
    coursePrice : PropTypes.number.isRequired,
    credit : PropTypes.number.isRequired,
    cartSide : PropTypes.array.isRequired,
}
export default Cart;
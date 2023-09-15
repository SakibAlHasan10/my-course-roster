import PropTypes from 'prop-types'
const CartContainer = ({cartSide, myCredit, coursePrice}) => {
    // console.log(myCredit)
    return (
        <div>
            <h2 className=" my-3 text-xl font-bold">Course Name</h2>
            <div className=' w-full border-b-2 border-solid border-[#1c1b1b33] pb-4'>
                {
                    cartSide.map((cart, idx) => <h3 className='text-base font-normal' key={idx}
                    > {idx+1}  {cart.course_name}</h3>)
                }
            </div>
            <p className='my-4 border-b-2 border-solid border-[#1c1b1b33] pb-4 text-base font-medium'>Total Credit Hour: {myCredit}</p>
            <p>Total Price: {coursePrice} USD</p>
        </div>
    );
};
CartContainer.propTypes ={
    cartSide : PropTypes.array.isRequired,
    myCredit : PropTypes.number.isRequired,
    coursePrice : PropTypes.number.isRequired
}
export default CartContainer;
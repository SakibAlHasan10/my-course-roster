import PropTypes from 'prop-types'
const CartContainer = ({cartSide}) => {
    console.log(cartSide)
    return (
        <div>
            <h2 className=" my-3 text-xl font-bold">Course Name</h2>
            <div className=' w-full border-b-2 border-solid border-[#1c1b1b33] pb-4'>
                {
                    cartSide.map((cart, idx) => <h3 className='text-base font-normal' key={idx}
                    >  {cart.course_name}</h3>)
                }
            </div>
            <p className='my-4 border-b-2 border-solid border-[#1c1b1b33] pb-4 text-base font-medium'>Total Credit Hour : </p>
            <p>Total Price :  USD</p>
        </div>
    );
};
CartContainer.propTypes ={
    cartSide : PropTypes.array.isRequired
}
export default CartContainer;
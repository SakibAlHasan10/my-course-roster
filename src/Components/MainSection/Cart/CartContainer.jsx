import PropTypes from 'prop-types'
const CartContainer = ({cartSide}) => {
    console.log(cartSide)
    return (
        <div>
            <h2 className=" my-3 text-xl font-bold">Course Name</h2>
            {
                cartSide.map((cart, idx) => <h3 className='text-base font-normal' key={idx}
                >  {cart.course_name}</h3>)
            }
            
        </div>
    );
};
CartContainer.propTypes ={
    cartSide : PropTypes.array.isRequired
}
export default CartContainer;
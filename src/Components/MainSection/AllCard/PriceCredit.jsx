import { FaBookOpen, FaDollarSign} from 'react-icons/fa';
import PropTypes from 'prop-types'
const PriceCredit = ({card, handleCredit}) => {
    const {course_price,course_credit} = card
    return (
        <div>
            <div className='flex justify-between my-4'>
                <div className=' flex items-center gap-3'>
                <span  className=' text-xl'><FaDollarSign/></span>
                <p>Price: {course_price}</p>
                </div>
                <div className=' flex items-center gap-3'>
                <span className=' text-xl'><FaBookOpen/></span>
                <p>Credit: {course_credit}hr</p>
                </div>
            </div>
            <button onClick={()=>handleCredit(card)} className='btn capitalize w-full bg-blue-500 text-white text-base hover:bg-blue-400'>Select</button>
        </div>
    );
};
PriceCredit.propTypes ={
    card : PropTypes.object.isRequired,
    handleCredit : PropTypes.func.isRequired
}
export default PriceCredit;
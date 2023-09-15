
import PropTypes from 'prop-types'
import PriceCredit from './PriceCredit';
const Card = ({card, handleCredit}) => {
    const {img, course_name,course_description,} = card;
        // console.log(card)
    return (
        <div className="p-4 bg-white rounded-xl">
            <img src={img} className=' rounded-lg w-full h-40 image-full' alt="" />
            <h2 className=' text-xl mt-4 mb-3 font-semibold'>{course_name}</h2>
            <p className=' text-sm font-normal'>{course_description}</p>
            <PriceCredit card={card}
            handleCredit={handleCredit}
            ></PriceCredit>
        </div>
    );
};
Card.propTypes ={
    card : PropTypes.object.isRequired,
    handleCredit : PropTypes.func.isRequired
}
export default Card;
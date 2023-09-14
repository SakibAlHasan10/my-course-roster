import PropTypes from 'prop-types'
const Card = ({card}) => {
    const {img, course_name,course_description, course_price, 
        course_credit } = card;
        // console.log(card)
    return (
        <div className="p-4 bg-white rounded-xl">
            <img src={img} alt="" />
            <h2 className=' text-xl my-4 font-semibold'>{course_name}</h2>
            <p>{course_description}</p>
            <div className='flex'>
                <p>{course_price}</p>
                <p>{course_credit}hr</p>
            </div>
        </div>
    );
};
Card.propTypes ={
    card : PropTypes.object.isRequired
}
export default Card;
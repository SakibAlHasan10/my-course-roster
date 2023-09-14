import PropTypes from 'prop-types'
const Card = ({card}) => {
    const {img, course_name,course_description, course_price, 
        course_credit } = card;
        // console.log(card)
    return (
        <div className="p-4 bg-white rounded-xl">
            <img src={img} className=' rounded-lg w-full h-40 image-full' alt="" />
            <h2 className=' text-xl mt-4 mb-3 font-semibold'>{course_name}</h2>
            <p className=' text-sm font-normal'>{course_description}</p>
            <div className='flex justify-between my-4'>
                <p>Price: {course_price}</p>
                <p>Credit: {course_credit}hr</p>
            </div>
        </div>
    );
};
Card.propTypes ={
    card : PropTypes.object.isRequired
}
export default Card;
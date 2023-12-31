import PropTypes from 'prop-types'
import Card from "./Card";

const Cards = ({allCard, handleCredit}) => {
    // console.log(allCard)
    return (
        <div className="grid xl:grid-cols-3 md:grid-cols-2 gap-5">
            {
                allCard.map((card, idx) =><Card key={idx} 
                card={card} handleCredit={handleCredit}></Card>)
            }
            
        </div>
    );
};
Cards.propTypes ={
    allCard : PropTypes.array.isRequired,
    handleCredit : PropTypes.func.isRequired
} 
export default Cards;
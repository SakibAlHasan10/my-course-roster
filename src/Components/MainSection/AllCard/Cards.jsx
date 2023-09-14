import PropTypes from 'prop-types'
import Card from "./Card";

const Cards = ({allCard}) => {
    console.log(allCard)
    return (
        <div className="grid grid-cols-3 gap-5">
            {
                allCard.map((card, idx) =><Card key={idx} card={card}></Card>)
            }
            
        </div>
    );
};
Cards.propTypes ={
    allCard : PropTypes.array.isRequired
} 
export default Cards;
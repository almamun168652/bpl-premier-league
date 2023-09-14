
import PropTypes from 'prop-types';
import Cart from '../Cart/Cart';

const Carts = ({ cardsPlayers , cost }) => {
    return (
        <div className="w-1/3 pl-10">
            <div className='p-4 mb-2 text-lg font-semibold text-center bg-[#3051e4] flex justify-between'>
                <h1 className=''>Total Players : {cardsPlayers.length}</h1>
                <h1 className=''>Total Cost : {cost} Tk</h1>
                
            </div>
            {
                cardsPlayers.map((perCart, idx) => (
                    <Cart key={idx} perCart={perCart}></Cart>
                ))
            }
        </div>
    );
};

Carts.propTypes = {
    cardsPlayers: PropTypes.array.isRequired,
    cost:PropTypes.number
}

export default Carts;
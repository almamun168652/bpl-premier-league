
import PropTypes from 'prop-types';
import { useState } from 'react';

const Card = ({ singlePlayers , addToBuy}) => {

    const [disable , setDisale ] = useState(false);
    
    return (
        <div className='border border-gray-400 p-4 bg-[#0000008d] space-y-2'>
            <div>
                <img className='mx-auto rounded-full w-24 h-24' src={singlePlayers.image} alt="" />
            </div>
            <h1 className='text-center font-semibold text-xl'>{singlePlayers.name}</h1>
            <h1 className='font-md'>Age: {singlePlayers.age}</h1>
            <h1 className='font-md'>Salary: {singlePlayers.salary} Tk</h1>
            <div className='text-center'> 
                <button disabled={disable} onClick={()=> {addToBuy(singlePlayers); setDisale(true)}} className='bg-[#3069e4] hover:bg-[#3051e4] mt-2 px-4 py-1 rounded-md'>Buy Player</button>
            </div>
        </div>
    );
};


Card.propTypes = {
    singlePlayers: PropTypes.object.isRequired,
    addToBuy:PropTypes.func
}


export default Card;
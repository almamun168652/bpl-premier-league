import { useEffect } from "react";
import Card from "../Card/Card";
import { useState } from "react";
import PropTypes from 'prop-types';

const Cards = ({addToBuy}) => {
    const [allPlayers , setAllPlayers] = useState([]);

    useEffect(()=>{
        fetch('data.json')
            .then(res => res.json())
            .then(data => setAllPlayers(data));
    }, [])

    return (
        <div className="md:w-2/3">
            <div className="grid grid-cols-3 gap-16">
                {
                    allPlayers.map(singlePlayers => (
                        <Card addToBuy={addToBuy} key={singlePlayers.id} singlePlayers={singlePlayers}></Card>
                    ))
                }
            </div>
        </div>
    );
};


Cards.propTypes = {
    addToBuy: PropTypes.func,
}


export default Cards;
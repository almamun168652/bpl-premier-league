import { useState } from "react";
import Cards from "../Cards/Cards";
import Carts from "../Carts/Carts";
import Header from "../Header/Header";

const Home = () => {

    const [cardsPlayers , setCardsPlayers] = useState([]);
    const [cost , setCost] = useState(0);

    const addToBuy = (singlePlayers) => {

        const allCost = cost + singlePlayers.salary;

        setCost(allCost);

        const newCardsPlayers = [...cardsPlayers , singlePlayers]
        setCardsPlayers(newCardsPlayers)
    }



    return (
        <div>
            
            <Header></Header>

            <main className="max-w-screen-xl mx-auto text-white flex flex-col md:flex-row my-6">
                <Cards addToBuy={addToBuy}></Cards>
                <Carts cardsPlayers={cardsPlayers} cost={cost}></Carts>
            </main>
            
        </div>
    );
};

export default Home;
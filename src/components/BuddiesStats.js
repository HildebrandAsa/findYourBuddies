import {useState} from "react";
import Button from "./Button";
import Adventure from "./Adventure";

import ChoicesContext from "../context/ChoicesContext";
import {useContext} from "react";


const BuddiesStats = () =>{
    const { buddies } = useContext(ChoicesContext);




    return(
        <div>
            <h2>Congratulations, you found ${buddies.length} buddies</h2>
        </div>
    );
};

export default BuddiesStats;

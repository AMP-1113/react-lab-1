import { useState } from 'react';
import './Ad.css'

interface Props {
    flavor: string;
    fontSize: number;
    darkTheme: boolean;
}

function Ad({flavor, fontSize, darkTheme}: Props) {
 

    let additionalClass = "";
    if (darkTheme === true) {
        additionalClass = " dark";
    }
    return (
    <div className={"voteBoxforAd" + additionalClass}>
        <p>Vote For</p>
        <p className="FlavorText">{flavor}</p>
    </div>
    )
}

export default Ad;



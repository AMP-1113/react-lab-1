import { useState } from 'react';
import './Ad.css'

interface Props {
    flavor: string;
    fontSize: number;
    darkTheme: boolean;
}

function Ad({flavor, fontSize, darkTheme}: Props) {
 
    const [ theme, setTheme ] = useState(false);
    
    // const styles = {
    //     fontSize: size + "px",
    // }

    let additionalClass = "";
    if (darkTheme === true) {
        additionalClass = " dark";
    }
    return (
    <div className={"voteBoxforAd" + additionalClass}>
        <p>Vote For</p>
        <p>{flavor}</p>
    </div>
    )
}

export default Ad;



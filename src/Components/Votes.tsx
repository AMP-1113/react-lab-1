import { useState } from "react";
import './Votes.css';

function Votes () {
    const [ cCount, setcCount ] = useState(0);
    const [ vCount, setvCount ] = useState(0);
    const [ sCount, setsCount ] = useState(0);

    function countUpC() {
        setcCount(prev => prev + 1);
    }
    function countUpV() {
        setvCount(prev => prev + 1);
    }
    function countUpS() {
        setsCount(prev => prev + 1);
    }
    let totalVotes = cCount + vCount + sCount;
    let Cpercentage = cCount / totalVotes * 100;
    let Vpercentage = vCount / totalVotes * 100;
    let Spercentage = sCount / totalVotes * 100;

    

    return(
        <div className="Votes">
            <h2>Vote Here</h2>
            <div className="voteButtons">
                <button onClick={countUpC}>Chocolate</button>
                <button onClick={countUpV}>Vanilla</button>
                <button onClick={countUpS}>Strawberry</button>
            </div>
            <div className="Graphs">
                { totalVotes === 0 && <p>No votes yet.</p> } 
                { cCount !== 0 && <p>Chocolate: {cCount} ({Cpercentage.toFixed(1)}%)</p> }
                { cCount !== 0 && <div className="ChocolateGraph" style={{backgroundColor: "brown", width: Cpercentage + "%", height: "20"+"px"}}></div> }
                { vCount !== 0 && <p>Vanilla: {vCount} ({Vpercentage.toFixed(1)}%)</p> }
                { vCount !== 0 && <div className="VanillaGraph" style={{backgroundColor: "beige", width: Vpercentage + "%", height: "20"+"px"}}></div> }
                { sCount !== 0 && <p>Strawberry: {sCount} ({Spercentage.toFixed(1)}%)</p> }
                { sCount !== 0 && <div className="StrawberryGraph" style={{backgroundColor: "crimson", width: Spercentage + "%", height: "20"+"px"}}></div> }
            </div>
        </div>
    )
}

export default Votes;
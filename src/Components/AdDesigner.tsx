import { useState } from "react";
import "./AdDesigner.css"

function AdDesigner () {
    const [ flavor, setFlavor ] = useState("");
    const [ theme, setTheme ] = useState(false);
    const [ size, setSize ] = useState(40);

    const styles = {
        fontSize: size + "px",
    }

    function strawberry() {
        setFlavor("Strawberry");
    }
    function chocolate() {
        setFlavor("Chocolate");
    }
    function vanilla() {
        setFlavor("Vanilla");
    }

    function dark() {
        setTheme(false);
    }

    function light() {
        setTheme(true);
    }

    function sizeUp() {
        setSize(prev => prev + 2)
    }

    function sizeDown() {
        setSize(prev => prev - 2)
    }

    let additionalClass = "";
    if (theme === true) {
        additionalClass = " dark";
    }

    return (
        <div className="AdDesignerContainer">
            <h2>Ad Designer</h2>
            <div className={"voteBox" + additionalClass}>
                <p>Vote For</p>
                <p id="AdFlavor" style={styles}>{flavor}</p>
            </div>
                <div className="buttonContainer">
                <p>
                    <h4>What to Support</h4>
                    <button disabled={flavor === "Chocolate"} onClick={chocolate}>Chocolate</button>
                    <button disabled={flavor === "Vanilla"} onClick={vanilla}>Vanilla</button>
                    <button disabled={flavor === "Strawberry"} onClick={strawberry}>Strawberry</button>
                </p>
                <p>
                    <h4>Color Theme</h4>
                    <button disabled={theme === false} onClick={dark}>Light</button>
                    <button disabled={theme === true} onClick={light}>Dark</button>
                </p>
                <p>
                    <h4>Font Size</h4>
                    <button onClick={sizeDown}>Down</button>
                    <span>{size}</span>
                    <button onClick={sizeUp}>Up</button>
                </p>
            </div>
        </div>
    )
}

export default AdDesigner;
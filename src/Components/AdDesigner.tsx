import { useState } from "react";
import "./AdDesigner.css"

function AdDesigner () {
    const [ flavor, setFlavor ] = useState("");
    const [ theme, setTheme ] = useState(false);
    const [ size, setSize ] = useState(10);

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
        additionalClass = " dark"
    }

    return (
        <div className="AdDesignerContainer">
            <h2>Ad Designer</h2>
            <div className={"voteBox" + additionalClass}>
                <p>Vote For</p>
                <p style={styles}>{flavor}</p>
            </div>
            <h4>What to Support</h4>
            <button onClick={chocolate}>Chocolate</button>
            <button onClick={vanilla}>Vanilla</button>
            <button onClick={strawberry}>Strawberry</button>
            <h4>Color Theme</h4>
            <button onClick={dark}>Light</button>
            <button onClick={light}>Dark</button>
            <h4>Font Size</h4>
            <button onClick={sizeDown}>Down</button>
            <span>{size}</span>
            <button onClick={sizeUp}>Up</button>
        </div>
    )
}

export default AdDesigner;
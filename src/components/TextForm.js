import React, { useState } from 'react'

export default function TextForm(props) {

    const handleUpClick = () => {

        let newText = text.toUpperCase();
        setText(newText)
    }

    const handleLoClick = () => {

        let newText = text.toLowerCase();
        setText(newText)
    }

    const handleClearClick = () => {

        let newText = '';
        setText(newText)
    }

    const handleCopy = () => {
        let text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
    }

    const handleOnChange = (event) => {
       
        setText(event.target.value)
    }

    const [text, setText] = useState("Enter your text here...");

    return (
        <>
            <div className="container">
                <h2>{props.heading}</h2>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
                </div>

                <button className="btn btn-outline-success my-1 mx-3" onClick={handleUpClick}>Convert to Uppercase</button>

                <button className="btn btn-outline-success my-1 mx-3" onClick={handleLoClick}>Convert to Lowercase</button>

                <button className="btn btn-outline-danger my-1 mx-3" onClick={handleClearClick}>Clear Text</button>

                <button className="btn btn-secondary my-1" onClick={handleCopy}>Copy Text</button>
            </div>

            <div className="container my-3">
                <h2>Your text summary</h2>
                {/* this below line used for count words and characters */}

                <p>{text.split(" ").filter((element) => { return element.length !== 0 }).length} words and {text.length} characters</p>
                <p>{0.008 * text.split(" ").length} Minutes for read</p>
                <h3>Preview</h3>
                {/* this is used for show all content */}

                <p>{text}</p>
            </div>

        </>
    )
}

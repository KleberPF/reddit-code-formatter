import React, { useState } from "react";

import "./App.css";

const App = () => {
    const [formattedCode, setFormattedCode] = useState("");

    function formatCode(e) {
        const inputCode = e.target.value;
        let formattedCode = inputCode.replace(/\n/g, "\n    ");
        formattedCode = formattedCode.replace(/^/g, "    ");
        setFormattedCode(formattedCode);
    }

    function copyToClipboard(e) {
        navigator.clipboard.writeText(formattedCode);
    }

    return (
        <>
            <div className="header">
                <h1 id="headline">Simple Code Formatter for Reddit</h1>
            </div>
            <div className="textareas-container">
                <div>
                    <h4 className="non-formatted-header">
                        Your non-formatted code:
                    </h4>
                    <textarea
                        name="code-input"
                        id="code-input-area"
                        cols="50"
                        rows="40"
                        placeholder="Enter your code..."
                        onChange={formatCode}
                    ></textarea>
                </div>
                <div className="formatted-container">
                    <div className="formatted-header">
                        <h4>Your formatted code:</h4>
                        <button onClick={copyToClipboard}>
                            Copy to clipboard
                        </button>
                    </div>
                    <textarea
                        name="code-input"
                        id="code-input-area"
                        cols="50"
                        rows="40"
                        readOnly={true}
                        value={formattedCode}
                    ></textarea>
                </div>
            </div>
        </>
    );
};

export default App;

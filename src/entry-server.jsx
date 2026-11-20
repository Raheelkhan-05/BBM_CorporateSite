import React from "react";
import { renderToString } from "react-dom/server";
import Root from "./Root.jsx";
import { faqs } from "./data.js";

export function render() {
    return renderToString(
        <React.StrictMode>
            <Root />
        </React.StrictMode>
    );
}

export { faqs };
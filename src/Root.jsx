import { MotionConfig } from "motion/react";
import App from "./App.jsx";

export default function Root() {
    return (
        <MotionConfig reducedMotion="user">
            <App />
        </MotionConfig>
    );
}
import React, { useEffect } from "react";
import "./glitchText.css";

type TypeTextProps = {
    children: string;
    ms?: number;
};

const randomizeString = (str: string) => {
    return str
        .split("")
        .sort(() => Math.random() - 0.5)
        .join("");
};

const RandomizeText = ({ children, ms }: TypeTextProps) => {
    const [text, setText] = React.useState(children);
    const [iteration, setIteration] = React.useState(0);

    useEffect(() => {
        if (children === undefined) return;
        const interval = setInterval(
            () => {
                setIteration((prevIteration) => prevIteration + 1);

                if (iteration % 10 === 0) {
                    setText(randomizeString(children));
                } else {
                    setText(children);
                }
            },
            ms === undefined ? 100 : ms
        );
        return () => clearInterval(interval);
    });

    return (
        <div>
            <h1 className="glitch glow">
                <span aria-hidden="true">{text}</span>
                {text}
                <span aria-hidden="true">{text}</span>
            </h1>
        </div>
    );
};

export default RandomizeText;

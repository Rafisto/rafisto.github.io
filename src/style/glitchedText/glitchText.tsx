import React, { CSSProperties } from "react";
import "./glitchText.css";

type GlitchTextProps = {
    text: string;
    style?: CSSProperties;
}

const GlitchText = ({text,style}: GlitchTextProps) => {
    return (
        <div>
            <h1 className="glitch glow" style={style}>
                <span aria-hidden="true">{text}</span>
                {text}
                <span aria-hidden="true">{text}</span>
            </h1>
        </div>
    );
};

export default GlitchText;

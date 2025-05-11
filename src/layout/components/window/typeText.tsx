import React, { useEffect } from 'react'
import './gradient.css';

type TypeTextProps = {
    children?: string
    ms?: number
    start?: number
}

const TypeText = ({children, ms, start}: TypeTextProps) => {
    const [text, setText] = React.useState((start === undefined ? 1 : start));

    useEffect(()=> {
        if (children === undefined) return;
        const interval = setInterval(() => {
            if (text >= children.length) {
                clearInterval(interval);
                return;
            }
            setText((text) => text + 1);
        }, (ms === undefined ? 100 : ms));
        return () => clearInterval(interval);
    });

    const renderedText = (children !== undefined) ? children.substring(0,text) : "";
    return (
        <span>{renderedText}</span>
    )
}

export default TypeText
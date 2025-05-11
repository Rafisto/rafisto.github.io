import { Divider, Skeleton } from '@mui/material';
import React, { useEffect, useState } from 'react'
import './../poem.css';

interface Display {
    url: string | undefined
}

interface Poem {
    url: string,
    id: number,
    date: string,
    title: string,
    description: string,
    content: string[]
}

const PoemDisplay = ({ url }: Display) => {
    const [loading, setLoading] = useState<Boolean>(true);
    const [poem, setPoem] = useState<Poem>();

    useEffect(() => {
        if (url === undefined) return;
        fetch(`https://raw.githubusercontent.com/Rafisto/postsdata/main/poems/json/${url}.json`)
            .then((response) => response.json())
            .then((data) => {
                setPoem(data);
                setLoading(false);
            });
    }, [url]);

    return (
        (url != undefined) ?
            (
                (loading) ?
                    (
                        <div>
                            <Skeleton variant="rectangular" width="50%" />
                            <Skeleton variant="rectangular" height="50vh" />
                        </div>
                    ) :
                    (
                        <div className="poemparent">
                            <div className="desktop_header">
                                <p className="poemtitle">{poem!.title}</p>
                                <p className="poemdate">{poem!.date}</p>
                                <div className="poemcontent">
                                    {poem!.content.map((line: string, index: number) => {
                                        var text = "";
                                        let lineNumber = String(index + 1)
                                        if ((index + 1) % 5 === 0) {
                                            text = lineNumber + " ".repeat(String(text.length).length - lineNumber.length + 2);
                                        }
                                        else {
                                            text = " ".repeat(String(text.length).length + 2);
                                        }
                                        return (
                                            <p key={index} className="poemline"><span className="poemindex">{text}</span>{line}</p>
                                        )
                                    })}
                                </div>
                            </div>
                            <div className="mobile_header">
                                <p className="poemtitle">{poem!.title}</p>
                                <p className="poemdate">{poem!.date}</p>
                                <div className="poemcontent">
                                    <p style={{ textAlign: "left" }}>
                                        {poem!.content.map((line: string, index: number) => {
                                            return (
                                                <React.Fragment key={index}>
                                                    {line}<br />
                                                </React.Fragment>
                                            )
                                        })}
                                    </p>
                                </div>
                            </div>
                        </div>
                    )
            )
            :
            (
                <div>Undefined</div>
            )
    )
}

export default PoemDisplay
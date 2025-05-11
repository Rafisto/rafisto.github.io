import React from "react";
import ReactMarkdown from "react-markdown";
import remarkMath from "remark-math";
import remarkGfm from "remark-gfm";
import rehypeKatex from "rehype-katex";
import "katex/dist/katex.min.css";
import Data from "../../data/Data";
import WindowWrap from "../../../layout/components/window/windowWrap";
import LinkIcon from "@mui/icons-material/Link";
import { Typography } from "@mui/material";
import StyledLink from "../../../style/styledLink";
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter'
import {coldarkDark as codeStyle} from 'react-syntax-highlighter/dist/esm/styles/prism'

interface MarkdownImageProps {
    alt?: string;
    src?: string;
}

function MarkdownImage(props: MarkdownImageProps) {
    const alt = props.alt ? props.alt : "Image has a missing property 'alt'";
    const src = props.src ? props.src : "Image has a missing property 'src'";
    return (
        <>
            <WindowWrap name={alt}>
                {props.src ? (
                    <img
                        style={{ width: "100%", maxHeight: "100%" }}
                        alt={alt}
                        src={Data.fetchArticleContentImage + src}
                    />
                ) : (
                    <Typography>{src}</Typography>
                )}
            </WindowWrap>
        </>
    );
}

interface MarkdownLinkProps {
    href?: string;
    title?: React.ReactNode;
}

function MarkdownLink(props: MarkdownLinkProps) {
    const href = props.href ? props.href : "Link has a missing property 'href'";
    const title = props.title
        ? props.title
        : "Link has a missing property 'title'";
    return (
        <>
            {props.href ? (
                <StyledLink name={title} link={href} icon={<LinkIcon />} />
            ) : (
                <Typography>{title}</Typography>
            )}
        </>
    );
}

interface MarkdownCodeProps {
    lang?: string;
    content?: React.ReactNode;
}

export default function Markdown(props: any) {
    return (
        <ReactMarkdown
            components={{
                img: ({ node, ...props }) =>
                    MarkdownImage({ alt: props.alt, src: props.src }),
                a: ({ node, ...props }) =>
                    MarkdownLink({ href: props.href, title: props.children }),
                code(props) {
                    const { children, className, node, ...rest } = props;
                    const match = /language-(\w+)/.exec(className || "");
                    return match ? (
                        <SyntaxHighlighter
                            {...rest}
                            children={String(children).replace(/\n$/, "")}
                            style={codeStyle}
                            language={match[1]}
                            PreTag="div"
                        />
                    ) : (
                        <code {...rest} className={className}>
                            {children}
                        </code>
                    );
                },
            }}
            remarkPlugins={[remarkMath, remarkGfm]}
            rehypePlugins={[rehypeKatex]}
            {...props}
        />
    );
}

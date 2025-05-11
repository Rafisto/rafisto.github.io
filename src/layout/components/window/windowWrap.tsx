import { Box, Typography } from "@mui/material";
import React from "react";
import TypeText from "./typeText";
import "./gradient.css";
import Fade from "react-reveal/Fade";

type Props = {
    children: React.ReactNode;
    name?: string;
    ms?: number;
    start?: number;
    maxWidth?: string;
    invertColor?: boolean;
    sx?: any;
    noPadding?: boolean;
};

const WindowWrap = ({
    children,
    name,
    maxWidth,
    invertColor,
    sx,
    start,
    ms,
    noPadding,
}: Props) => {
    const mWidth = maxWidth !== undefined ? maxWidth : "none";
    const invtyp = invertColor == true ? "igacc igborder" : "gacc";
    const invbox = invertColor == true ? "igform igborder" : "gform gborder";
    const displayName =
        name !== undefined ? (
            <Typography
                className={invtyp}
                variant="subtitle1"
                sx={{ fontFamily: "monospace" }}
            >
                <TypeText start={start ? start : undefined} ms={ms}>
                    {name}
                </TypeText>
            </Typography>
        ) : (
            <Typography
                variant="subtitle1"
                sx={{
                    marginTop: "1px",
                    fontFamily: "monospace",
                    color: "transparent",
                }}
            >
                .{" "}
            </Typography>
        );
    return (
        <Fade>
            <Box maxWidth={mWidth} margin="auto">
                <Box
                    sx={sx}
                    className="gformpadding"
                    style={{ padding: noPadding ? "0" : "inherit" }}
                >
                    <Box>{displayName}</Box>
                    <Box className={invbox} sx={{ marginInline: "auto" }}>
                        {children}
                    </Box>
                </Box>
            </Box>
        </Fade>
    );
};

export default WindowWrap;

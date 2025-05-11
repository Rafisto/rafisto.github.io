import React from 'react'
import WindowWrap from '../../layout/components/window/windowWrap'
import { Box, ListItemButton, Typography } from '@mui/material'

type BackgroundImagePanelProps = {
    name: string;
    icon: JSX.Element;
    src: string;
}

const BackgroundImagePanel = ({ name, icon, src }: BackgroundImagePanelProps) => {
    const IconComponent = icon.type;
    return (
        <WindowWrap name={name}>
            <div style={{ position: "relative" }}>
                <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", width: "100%" }}>
                    <ListItemButton sx={{ width: "90%", margin: "auto", padding:"0" }}>
                        <Box sx={{ margin: "auto", textAlign: "center", background: "rgba(0,0,0,0.5)", padding: "20px", width: "100%", border: "1px solid " }}>
                            <IconComponent style={{ fontSize: "50pt" }} />
                            <Typography variant="h6">{name}</Typography>
                        </Box>
                    </ListItemButton>
                </div>
                <img src={src} width="100%" height="300px" style={{ objectFit: "cover", userSelect: "none", pointerEvents: "none" }} />
            </div>
        </WindowWrap >
    )
}

export default BackgroundImagePanel
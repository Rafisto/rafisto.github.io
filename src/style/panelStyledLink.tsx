import { Box, Grid, ListItemButton, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const LinkStyle = { marginBlock: "5pt", color: "white", textDecoration: "none", display: 'flex', alignItems: 'center' }

interface StyledLinkProps {
    name: string | JSX.Element | React.ReactNode;
    link: string;
    icon?: JSX.Element;
}

const PanelStyledLink = ({ name, link, icon }: StyledLinkProps) => {
    const IconComponent = (icon) ? icon.type : null;
    return (
        <Grid item xs={12} sm={6} md={4}>
            <ListItemButton sx={{ width: "90%", margin: "auto", padding: "0" }} href={link}>
                <Box sx={{ margin: "auto", textAlign: "center", padding: "20px", width: "100%" }}>
                    {(icon) && <IconComponent style={{ fontSize: "40pt" }} />}
                    <Typography variant="h6">{name}</Typography>...
                </Box>
            </ListItemButton>
        </Grid>
    )
}

export default PanelStyledLink
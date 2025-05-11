import { Box, Grid, ListItemButton, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const LinkStyle = { marginBlock: "5pt", color: "white", textDecoration: "none", display: 'flex', alignItems: 'center' }

interface StyledLinkProps {
    name: string;
    description: string;
    link: string;
}

const ArticleListItem = ({ name, description, link }: StyledLinkProps) => {
    return (
        <Grid item xs={12} sm={6} md={4}>
            <ListItemButton sx={{ padding: "5px", color: "white", textDecoration: "none", display: "block" }} component={Link} to={link}>
                <Typography variant="h5">{name}</Typography>
                <Typography variant="h6" sx={{ color: "#cccccc" }}>{description}</Typography>
            </ListItemButton>
        </Grid>
    )
}

export default ArticleListItem
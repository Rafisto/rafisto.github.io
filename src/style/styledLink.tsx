import { Typography } from '@mui/material'
import React, { CSSProperties } from 'react'
import { Link } from 'react-router-dom'

const LinkStyle = { marginBlock: "5pt", color: "white", textDecoration: "none", display: 'flex', alignItems: 'center' }

interface StyledLinkProps {
    name: string | JSX.Element | React.ReactNode;
    link: string;
    icon: JSX.Element;
    style?: CSSProperties;
}

const styledLink = ({ name, link, icon, style }: StyledLinkProps) => {
    return (
        <Link to={link} style={LinkStyle}>
            {icon}<Typography sx={{ display: "inline", ...style }}>&nbsp;{name}</Typography>
        </Link>
    )
}

export default styledLink
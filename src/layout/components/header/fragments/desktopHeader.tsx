import React from 'react';
import { AppBar, Toolbar, Typography, IconButton, Slide, useScrollTrigger } from '@mui/material';
import { Link } from 'react-router-dom';
import { Routes } from '../../../general/routes';
import T from '../../../../localization/T';
import LanguageSelector from '../../../general/functions/languageSelector';
import { HideOnScroll } from './hideOnScroll';
import GradientDivider from '../../../../style/gradientDivider';

const DesktopHeader = () => {
    return (
        <HideOnScroll>
            <AppBar sx={{ background: "#000000e0" }} enableColorOnDark>
                <Toolbar className="static_toolbar">
                    <Typography sx={{ flexGrow: 1 }} component={Link} to={"/"} style={{textDecoration:"none",color:"white"}}>Rafał Włodarczyk</Typography>
                    {Routes.map((button, index) => {
                        return (
                            <IconButton key={`navbtn-${index}`} component={Link} to={button.link} color="inherit" aria-label={button.name} size="medium">
                                <Typography>{T(button.name)}</Typography>
                            </IconButton>
                        )
                    })}
                    <LanguageSelector />
                </Toolbar>
                <GradientDivider />
            </AppBar>
        </HideOnScroll>
    )
}

export default DesktopHeader
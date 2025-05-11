import { AppBar, Toolbar, IconButton, Typography } from '@mui/material'
import React from 'react'
import GradientDivider from '../../../../style/gradientDivider'
import MenuIcon from '@mui/icons-material/Menu';
import { HideOnScroll } from './hideOnScroll';

type MobileHeaderProps = {
    toggleMenu: () => void
}

const MobileHeader = ({ toggleMenu }: MobileHeaderProps) => {
    return (
        <HideOnScroll>
            <AppBar sx={{ background: "#000000e0" }} enableColorOnDark>
                <Toolbar sx={{ paddingInline: "24px", minHeight: '64px' }}>
                    <div style={{ flexGrow: "1" }}>
                        <IconButton onClick={toggleMenu}>
                            <MenuIcon />
                            <Typography>Menu</Typography>
                        </IconButton>
                    </div>
                    <Typography>Rafał Włodarczyk</Typography>
                </Toolbar>
                <GradientDivider />
            </AppBar>
        </HideOnScroll>
    )
}

export default MobileHeader
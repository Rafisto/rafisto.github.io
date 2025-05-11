import { Drawer, IconButton, Typography, Divider, List, ListItemButton } from '@mui/material';
import React from 'react'
import { Link } from 'react-router-dom';
import T from '../../../../localization/T';
import MenuIcon from '@mui/icons-material/Menu';
import { Routes } from '../../../general/routes';
import LanguageSelector from '../../../general/functions/languageSelector';

type MobileMenuProps = {
    mobileMenu: boolean;
    toggleMenu: () => void;
}

const MobileMenuDrawer = ({ mobileMenu, toggleMenu }: MobileMenuProps) => (
    <Drawer open={mobileMenu} PaperProps={{ sx: { background: "#000000" } }}>
        <div style={{ minWidth: "200px", textAlign: "center" }}>
            <div style={{ minHeight: "64px", display: "flex", justifyContent: "center" }}>
                <IconButton onClick={toggleMenu} sx={{ width: "80%" }}>
                    <MenuIcon />
                    <Typography>Menu</Typography>
                </IconButton>
                <LanguageSelector />
            </div>
            <Divider sx={{ backgroundColor: "#009bff55" }} />
            <List>
                {Routes.map((button, index) => {
                    let Icon = button.icon.type;
                    return (
                        <ListItemButton key={`menubtn-${index}`} component={Link} to={button.link} onClick={toggleMenu}>
                            <Icon sx={{ padding: "5px" }} />
                            <Typography>{T(button.name)}</Typography>
                        </ListItemButton>
                    );
                })}
            </List>
        </div>
    </Drawer>
)

export default MobileMenuDrawer
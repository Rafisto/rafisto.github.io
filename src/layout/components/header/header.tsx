import { useScrollTrigger, Slide } from '@mui/material';
import React from 'react'
import DesktopHeader from './fragments/desktopHeader';
import './header.css';
import MobileHeader from './fragments/mobileHeader';
import MobileMenuDrawer from './fragments/mobileMenuDrawer';

const Header = () => {
    const [mobileMenu, setMobileMenu] = React.useState(false);

    const toggleMenu = () => {
        setMobileMenu(!mobileMenu);
    }

    return (
        <React.Fragment>
            <div className="desktop_header">
                <DesktopHeader />
            </div>
            <div className="mobile_header">
                <MobileHeader toggleMenu={toggleMenu} />
            </div>
            <MobileMenuDrawer mobileMenu={mobileMenu} toggleMenu={toggleMenu} />
        </React.Fragment>
    )
}

export default Header;
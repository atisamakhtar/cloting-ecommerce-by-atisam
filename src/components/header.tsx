'use client'

import React, { useEffect, useState } from 'react';
import MyNavMenu from './myNavMenu';
import MobileNav from './mobileNav';

const Header = () => {

    const [mobileNavbar, setMobileNavbar] = useState(false);

    useEffect(() => {
        if (window.innerWidth < 920) {
            setMobileNavbar(true);
        }
    }, [])

    return (
        <div>
            {!mobileNavbar ? <MyNavMenu /> : <MobileNav />}
        </div>
    )
}

export default Header
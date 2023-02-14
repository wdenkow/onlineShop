import React, { useState } from 'react';
import { BottomNavigation, BottomNavigationAction } from '@mui/material';
import { useHistory } from 'react-router-dom';
import { MenuBook, Room, Whatshot, ShoppingCart } from '@mui/icons-material';

import useStyles from './styles';

const MobileBottomNav = () => {
    const history = useHistory();
    // TODO need implement logic by set active basket item when URL includes basket
    const [value, setValue] = useState<string>(history.location.pathname || '/');
    const { classes } = useStyles();

    const handleClick = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
        history.push(`${newValue}`);
    };

    return (
        <BottomNavigation className={classes.root} value={value} onChange={handleClick}>
            <BottomNavigationAction value="/" icon={<MenuBook />} />
            <BottomNavigationAction value="/restaurants" icon={<Room />} />
            <BottomNavigationAction value="/discount_campaign" icon={<Whatshot />} />
            <BottomNavigationAction value="/basket" icon={<ShoppingCart />} />
        </BottomNavigation>
    );
};

export default MobileBottomNav;

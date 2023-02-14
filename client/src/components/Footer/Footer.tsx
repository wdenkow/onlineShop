import React from 'react';
import { FOOTER_INFO_ITEMS } from './utils/utils';
import FooterNavigationBlock from './components/FooterNavBlock/FooterNavBlock';
import { FOOD_ROUTES, FOOTER_NAV_ITEMS } from '../../common/FOOD_ROUTES';
import FooterInfoBlock from './components/FooterInfoBlock';
import FoodNavigation from './components/FoodNavigation';

import useStyles from './styles';

const Footer = () => {
    const { classes } = useStyles();

    return (
        // TODO chech styles for Footer
        <footer className={classes.footer}>
            <FooterInfoBlock blockItems={FOOTER_INFO_ITEMS} />
            <FooterNavigationBlock navItems={FOOTER_NAV_ITEMS} />
            <FoodNavigation navItems={FOOD_ROUTES} isShowBorder />
            <div className={'payments'}></div>
        </footer>
    );
};

export default Footer;

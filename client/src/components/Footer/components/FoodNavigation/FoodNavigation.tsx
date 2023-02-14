import React from 'react';
import { Route } from '../../../../common/FOOD_ROUTES';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import useStyles from './styles';

interface Props {
    navItems: Array<Route>;
    isShowBorder: boolean;
    className?: string;
}

const FoodNavigation = ({ navItems, className, isShowBorder }: Props) => {
    const { classes, cx } = useStyles({ isShowBorder });
    const { t } = useTranslation();

    return (
        <nav className={cx(classes.navigation, className)}>
            <ul className={classes.navigationList}>
                {navItems.map((item) => {
                    return (
                        <NavLink
                            key={item.uniqueKey}
                            to={item.url}
                            className={classes.navItem}
                            activeClassName={classes.activeNavItem}
                        >
                            {t(item.title)}
                        </NavLink>
                    );
                })}
            </ul>
        </nav>
    );
};

FoodNavigation.defaultProps = {
    isShowBorder: false,
};

export default FoodNavigation;

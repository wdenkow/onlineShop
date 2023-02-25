import { useState } from 'react';
import { MOBILE_NAV_ROUTES } from '../../common/FOOD_ROUTES';
import { NavLink, useHistory } from 'react-router-dom';
import { Menu } from '@mui/icons-material';
import { Drawer, IconButton } from '@mui/material';
import SelectOS from '../SelectOS';
import PersonIcon from '@mui/icons-material/Person';
import { LANGUAGES, SHOPS } from '../../common/mockedData';
import { useTranslation } from 'react-i18next';
import LaptopHeader from './LaptopHeader';

import useStyles from './styles';

const Header = () => {
    const { classes } = useStyles();
    const { i18n } = useTranslation();
    const history = useHistory();

    const [drawerState, setDrawerState] = useState({
        anchor: 'left',
        isOpen: false,
    });

    const handleChangeLocale = (locale: string) => {
        i18n.changeLanguage(locale);
    };

    const HeaderMobile = () => {
        return (
            <div className={classes.mobileHeader}>
                <Menu onClick={() => setDrawerState({ ...drawerState, isOpen: true })} />
                <Drawer
                    sx={{ width: '400px' }}
                    open={drawerState.isOpen}
                    onClose={() => setDrawerState({ ...drawerState, isOpen: false })}
                >
                    <div className={classes.langWrapper}>
                        <SelectOS
                            value={i18n.language}
                            defaultValue="ru"
                            options={LANGUAGES}
                            onChange={handleChangeLocale}
                        />
                        <SelectOS defaultValue="minsk" options={SHOPS} />
                    </div>
                    <ul className={classes.mobileNavList}>
                        {MOBILE_NAV_ROUTES.map((route) => {
                            return (
                                <li key={route.uniqueKey} className={classes.mobileNavItem}>
                                    <NavLink className={classes.mobileNavItemLink} to={route.url}>
                                        {route.title}
                                    </NavLink>
                                </li>
                            );
                        })}
                    </ul>
                    <div className={classes.socialIcons}>3 images</div>
                </Drawer>
            </div>
        );
    };

    const onClickMobileSignIn = () => history.push('/auth');

    return (
        <header className={classes.header}>
            <HeaderMobile />
            <img className={classes.mobileLogo} src="" alt="logo" />
            <IconButton onClick={onClickMobileSignIn} className={classes.mobileSighIn}>
                <PersonIcon />
            </IconButton>
            <LaptopHeader />
        </header>
    );
};

export default Header;

import React, { useState } from 'react';
import { ADDITIONAL_NAV, MOBILE_NAV_ROUTES, FOOD_ROUTES } from '../../common/FOOD_ROUTES';
import { Link, NavLink } from 'react-router-dom';
import { Menu, AccessTime, Phone } from '@mui/icons-material';
import { Drawer, IconButton } from '@mui/material';
import FoodNavigation from '../Footer/components/FoodNavigation';
import ContentContainer from '../ContentContainer';
import ButtonCustom from '../Button';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SelectOS from '../SelectOS';
import BasketModal from '../BasketModal';
import PersonIcon from '@mui/icons-material/Person';
import { LANGUAGES, SHOPS } from '../../common/mockedData';
import { useTranslation } from 'react-i18next';

import useStyles from './styles';
import { useAppSelector } from '../../store/hooks';
import { getTotalItems, getTotalPrice } from '../../store/basket/basketSlice';

const Header = () => {
    const { classes } = useStyles();
    const { t, i18n } = useTranslation();

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

    const HeaderForLaptops = () => {
        const totalItems = useAppSelector(getTotalItems);
        const totalPrice = useAppSelector(getTotalPrice);

        const [isVisibleBasketModal, setIsVisibleBasketModal] = useState<boolean>(false);

        const onBasketClick = () => {
            setIsVisibleBasketModal(!isVisibleBasketModal);
        };

        return (
            <div className={classes.laptopHeader}>
                <ContentContainer>
                    <div className={classes.headerTopBlock}>
                        <img className={classes.logo} src="" alt="logo" />
                        <div className={classes.headerTermsInfo}>
                            <p>
                                <AccessTime />
                                {t('delivery.30min')}
                            </p>
                            <Link className={classes.headerTermsLink} to="/terms">
                                {t('nav.readMore')}
                            </Link>
                        </div>
                        <p className={classes.headerPhone}>
                            <Phone />
                            1111
                        </p>
                        <div className={classes.headerSettingsBlock}>
                            {/* TODO check, why select rerenders on add item to basket */}
                            <SelectOS
                                value={i18n.language}
                                defaultValue="ru"
                                options={LANGUAGES}
                                onChange={handleChangeLocale}
                            />
                            <SelectOS defaultValue="minsk" options={SHOPS} />
                            <ButtonCustom variant="contained">{t('logIn')}</ButtonCustom>
                        </div>
                    </div>
                    <div className={classes.headerBottomBlock}>
                        <div className={classes.headerFoodNav}>
                            <FoodNavigation
                                className={classes.headerFoodNavLeft}
                                navItems={FOOD_ROUTES}
                            />
                            <nav className={classes.laptopNavigation}>
                                <ul>
                                    {ADDITIONAL_NAV.map((item) => {
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
                        </div>
                        <div className={classes.basketContainer}>
                            {isVisibleBasketModal && (
                                <BasketModal onClose={setIsVisibleBasketModal} />
                            )}
                            <ButtonCustom
                                variant="contained"
                                startIcon={<ShoppingCartIcon />}
                                onClick={onBasketClick}
                            >
                                {t('basket', {
                                    count: totalItems,
                                    price: totalPrice === 0 ? 0 : totalPrice,
                                })}
                            </ButtonCustom>
                        </div>
                    </div>
                </ContentContainer>
            </div>
        );
    };

    return (
        <header className={classes.header}>
            <HeaderMobile />
            <img className={classes.mobileLogo} src="" alt="logo" />
            <IconButton className={classes.mobileSighIn}>
                <PersonIcon />
            </IconButton>
            <HeaderForLaptops />
        </header>
    );
};

export default Header;

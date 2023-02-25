import LoginForm from '../Forms/LoginForm';
import DialogOS from '../DialogOS';
import RegisterForm from '../Forms/RegisterForm';
import RestorePasswordForm from '../Forms/RestorePasswordForm';
import { useAppSelector } from '../../store/hooks';
import { getTotalItems, getTotalPrice } from '../../store/basket/basketSlice';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, NavLink } from 'react-router-dom';
import ContentContainer from '../ContentContainer';
import { AccessTime, Phone } from '@mui/icons-material';
import SelectOS from '../SelectOS';
import { LANGUAGES, SHOPS } from '../../common/mockedData';
import ButtonCustom from '../Button/Button';
import FoodNavigation from '../Footer/components/FoodNavigation';
import { ADDITIONAL_NAV, FOOD_ROUTES } from '../../common/FOOD_ROUTES';
import BasketModal from '../BasketModal';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

import useStyles from './styles';

const LaptopHeader = () => {
    const { classes } = useStyles();
    const { t, i18n } = useTranslation();

    const totalItems = useAppSelector(getTotalItems);
    const totalPrice = useAppSelector(getTotalPrice);

    const [isVisibleBasketModal, setIsVisibleBasketModal] = useState<boolean>(false);
    const [isVisibleSignIn, setIsVisibleSignIn] = useState<boolean>(false);
    const [currentContent, setCurrentContent] = useState<string>('login');

    const handleChangeLocale = (locale: string) => {
        i18n.changeLanguage(locale);
    };

    const LoginContent = () => {
        return (
            <>
                <h2>Sign in</h2>
                <LoginForm />
                <div className={classes.additionalLinks}>
                    <p
                        className={classes.additionalLink}
                        onClick={() => setCurrentContent('restorePassword')}
                    >
                        {t('form.text.forgotPass')}
                    </p>
                    <p
                        className={classes.additionalLink}
                        onClick={() => setCurrentContent('registation')}
                    >
                        {t('form.text.register')}
                    </p>
                </div>
            </>
        );
    };

    const RegistrationContent = () => {
        return (
            <>
                <h2>Regiter</h2>
                <RegisterForm />
                <div className={classes.additionalLinks}>
                    <p
                        className={classes.additionalLink}
                        onClick={() => setCurrentContent('login')}
                    >
                        {t('form.text.backToLogin')}
                    </p>
                </div>
            </>
        );
    };

    const RestorePasswordContent = () => {
        return (
            <>
                <h2>Restore password</h2>
                <RestorePasswordForm />
                <div className={classes.additionalLinks}>
                    <p
                        className={classes.additionalLink}
                        onClick={() => setCurrentContent('login')}
                    >
                        {t('form.text.backToLogin')}
                    </p>
                    <p
                        className={classes.additionalLink}
                        onClick={() => setCurrentContent('registation')}
                    >
                        {t('form.text.register')}
                    </p>
                </div>
            </>
        );
    };

    let Content;

    if (currentContent === 'login') {
        Content = <LoginContent />;
    }

    if (currentContent === 'registation') {
        Content = <RegistrationContent />;
    }
    if (currentContent === 'restorePassword') {
        Content = <RestorePasswordContent />;
    }

    const onBasketClick = () => {
        setIsVisibleBasketModal(!isVisibleBasketModal);
    };

    const onSignInClick = () => {
        setIsVisibleSignIn(!isVisibleSignIn);
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
                        <ButtonCustom onClick={onSignInClick} variant="contained">
                            {t('logIn')}
                        </ButtonCustom>
                        <DialogOS
                            className={classes.signInForm}
                            open={isVisibleSignIn}
                            setIsOpen={setIsVisibleSignIn}
                        >
                            {Content}
                        </DialogOS>
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
                        {isVisibleBasketModal && <BasketModal onClose={setIsVisibleBasketModal} />}
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

export default LaptopHeader;

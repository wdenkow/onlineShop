import { makeStyles } from 'tss-react/mui';

export default makeStyles()((theme) => ({
    header: {
        backgroundColor: theme.palette.customColors.white,
        color: theme.palette.primary.main,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '8px',
        [theme.breakpoints.up('lg')]: {
            display: 'block',
            padding: 0,
        },
    },
    mobileHeader: {
        '.MuiDrawer-paper': {
            maxWidth: '90vw',
            width: '400px',
            background: 'red',
        },
        [theme.breakpoints.up('lg')]: {
            display: 'none',
        },
    },
    mobileLogo: {
        [theme.breakpoints.up('lg')]: {
            display: 'none',
        },
    },
    mobileSighIn: {
        [theme.breakpoints.up('lg')]: {
            display: 'none',
        },
    },
    langWrapper: {
        padding: '24px 16px',
        borderBottom: '1px solid #ebeced',
    },
    langItem: {},
    mobileNavList: {
        margin: 0,
        padding: 0,
        '& li': {
            listStyleType: 'none',
            margin: 0,
            padding: 0,
        },
    },
    mobileNavItem: {},
    mobileNavItemLink: {
        display: 'flex',
        padding: '12px 16px',
        fontSize: '14px',
        lineHeight: '17px',
        color: '#43525a',
        textDecoration: 'none',
    },
    socialIcons: {
        padding: '24px 0',
        borderTop: '1px solid #ebeced',
    },
    laptopHeader: {
        display: 'none',
        [theme.breakpoints.up('lg')]: {
            display: 'block',
        },
    },
    headerTopBlock: {
        display: 'flex',
        justifyContent: 'space-between',
        padding: '24px 0',
    },
    logo: {
        width: '150px',
        height: '34px',
        backgroundColor: 'grey',
    },
    headerTermsInfo: {
        fontSize: '24px',
        lineHeight: '1em',
        fontWeight: 700,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-end',
        '& p': {
            display: 'flex',
        },
        '& a': {
            textDecoration: 'underline',
        },
    },
    headerTermsLink: {
        fontSize: '12px',
        lineHeight: '1em',
        fontWeight: 400,
        color: theme.palette.customColors.gray,
    },
    headerPhone: {
        fontSize: '24px',
        lineHeight: '1em',
        fontWeight: 700,
        display: 'flex',
    },
    headerSettingsBlock: {
        display: 'flex',
        gap: '4px',
    },
    headerBottomBlock: {
        display: 'flex',
        justifyContent: 'space-between',
    },
    laptopNavigation: {
        display: 'flex',
    },
    headerFoodNav: {
        display: 'flex',
    },
    headerFoodNavLeft: {
        borderRight: '1px solid',
    },
    navItem: {
        fontSize: '14px',
        lineHeight: '17px',
        padding: '4px 8px',
        color: theme.palette.customColors.blue,
    },
    activeNavItem: {
        borderBottom: '1px solid red',
    },
    basketContainer: {
        position: 'relative',
    },
}));

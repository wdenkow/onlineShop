import { makeStyles } from 'tss-react/mui';

export default makeStyles()((theme) => ({
    basket: {
        position: 'relative',
        backgroundColor: '#f7fcff',
    },
    container: {
        padding: '16px',
    },
    basketMobile: {
        [theme.breakpoints.up('lg')]: {
            display: 'none',
        },
    },
    basketDesktop: {
        display: 'none',
        [theme.breakpoints.up('lg')]: {
            display: 'flex',
            justifyContent: 'space-between',
            paddingTop: '40px',
        },
    },
    leftContent: {
        flexBasis: '60%',
        marginRight: '24px',
    },
    rightContent: {
        flexBasis: '40%',
    },
    orderContainer: {
        backgroundColor: 'white',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        position: 'fixed',
        bottom: '56px',
    },
    orderInfo: {
        textAlign: 'center',
        fontSize: '18px',
        lineHeight: '21px',
        fontWeight: 500,
        color: '#43525a',
    },
    orderBtn: {
        marginTop: '16px',
        width: '100%',
        height: '36px',
    },
}));

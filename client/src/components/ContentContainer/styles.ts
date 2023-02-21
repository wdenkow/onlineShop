import { makeStyles } from 'tss-react/mui';

export default makeStyles<{ isOnMainPage: boolean }>()((theme, { isOnMainPage }) => ({
    container: {
        width: '100%',
        maxWidth: '1366px',
        margin: '0 auto',
        padding: '0',
        paddingBottom: isOnMainPage ? '60px' : '0',
        [theme.breakpoints.up('md')]: {
            padding: '0 24px',
            paddingBottom: isOnMainPage ? '60px' : '0',
        },
    },
}));

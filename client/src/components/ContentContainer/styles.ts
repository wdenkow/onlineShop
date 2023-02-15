import { makeStyles } from 'tss-react/mui';

export default makeStyles()((theme) => ({
    container: {
        width: '100%',
        maxWidth: '1366px',
        margin: '0 auto',
        padding: '0',
        paddingBottom: '60px',
        [theme.breakpoints.up('md')]: {
            padding: '0 24px',
            paddingBottom: '60px',
        },
    },
}));

import { makeStyles } from 'tss-react/mui';

export default makeStyles()((theme) => ({
    root: {
        position: 'fixed',
        bottom: 0,
        zIndex: 10,
        width: '100%',
        justifyContent: 'space-around',
        boxShadow: '0 0 10px rgb(63 93 138 / 20%)',
        [theme.breakpoints.up('lg')]: {
            display: 'none',
        },
    },
}));

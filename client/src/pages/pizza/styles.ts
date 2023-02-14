import { makeStyles } from 'tss-react/mui';

export default makeStyles()((theme) => ({
    filterContainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        [theme.breakpoints.up('lg')]: {
            flexDirection: 'row',
        },
    },
    categories: {
        display: 'flex',
        flexDirection: 'column',
        gap: '0 8px',
        [theme.breakpoints.up('lg')]: {
            flexDirection: 'row',
        },
    },
    container: {
        paddingBottom: '60px',
    },
}));

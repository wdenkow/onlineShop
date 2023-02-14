import { makeStyles } from 'tss-react/mui';

export default makeStyles()((theme) => ({
    footer: {
        display: 'none',
        backgroundColor: theme.palette.customColors.white,
        paddingBottom: '20px',
        [theme.breakpoints.up('lg')]: {
            display: 'initial',
        },
    },
}));

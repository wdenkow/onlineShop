import { makeStyles } from 'tss-react/mui';

export default makeStyles()(() => ({
    container: {
        '& span': {
            padding: '0 6px',
        },
    },
    button: {
        minWidth: '50px',
    },
}));

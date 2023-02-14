import { makeStyles } from 'tss-react/mui';

export default makeStyles()((theme) => ({
    form: {
        display: 'flex',
        flexDirection: 'column',
        boxShadow: '0 4px 10px rgb(63 93 138 / 10%)',
        padding: '16px',
        paddingBottom: '72px',
        backgroundColor: 'white',
        '& h3': {
            marginBottom: '16px',
        },
        [theme.breakpoints.up('lg')]: {
            paddingBottom: '16px',
        },
    },
    input: {
        '&.MuiTextField-root': {
            height: '80px',
            marginBottom: '8px',
        },
    },
    selectContainer: {
        '&.MuiFormControl-root': {
            marginBottom: '32px',
        },
    },
    select: {
        height: '56px',
    },
    submitBtn: {
        color: 'white',
        backgroundColor: theme.palette.primary.main,
        height: '40px',
        width: '100%',
        border: 'none',
        borderRadius: '5px',
        fontSize: '14px',
        lineHeight: '16px',
        fontWeight: 400,
    },
    checkbox: {},
    error: {
        color: 'red',
        marginBottom: '8px',
    },
}));

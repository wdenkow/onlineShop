import { makeStyles } from 'tss-react/mui';

export default makeStyles()((theme) => ({
    item: {
        display: 'flex',
        alignItems: 'center',
        backgroundColor: 'rgba(0,121,174,.06)',
        padding: '0 8px 0 0',
        margin: '6px 0',
    },
    addBtn: {},
    image: {
        display: 'none',
        maxWidth: '32px',
        maxHeight: '38px',
        marginRight: '4px',
        [theme.breakpoints.up('sm')]: {
            display: 'inline-block',
        },
    },
    infoBlock: {
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
    },
    title: {
        display: 'block',
        fontSize: '14px',
        fontWeight: 400,
        lineHeight: '16px',
        color: '#00537a',
    },
    price: {
        display: 'block',
        fontSize: '12px',
        fontWeight: 500,
        lineHeight: '14px',
        color: '#00537a',
    },
}));

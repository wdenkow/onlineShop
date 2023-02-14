import { makeStyles } from 'tss-react/mui';

export default makeStyles()((theme) => ({
    modal: {
        maxHeight: '650px',
        minWidth: '376px',
        padding: '16px',
        backgroundColor: 'white',
        position: 'absolute',
        top: 0,
        right: '0',
        boxShadow: '0 4px 18px rgb(63 93 138 / 30%)',
        zIndex: '10',
    },
    closeBasketContainer: {},
    closeBasketBtn: {
        fontSize: '14px',
        lineHeight: '16px',
        backgroundColor: 'rgba(63,93,138,.04)',
        padding: '16px',
        width: '100%',
        height: '52px',
        color: theme.palette.customColors.blue,
        border: 'none',
        '&:hover': {
            cursor: 'pointer',
        },
    },
    basketList: {
        padding: '16px 0',
        overflow: 'auto',
        maxHeight: '400px',
    },
    orderContainer: {},
    orderInfo: {
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

import { makeStyles } from 'tss-react/mui';

export default makeStyles()(() => ({
    basketItem: {
        padding: '16px',
        borderRadius: '10px',
        position: 'relative',
        border: '1px solid',
        backgroundColor: 'rgba(63,93,138,.04)',
        margin: '8px 0',
    },
    basketItemName: {
        fontWeight: 500,
        fontSize: '18px',
        lineHeight: '21px',
        color: '#43525a',
    },
    basketItemTypeAndSize: {
        marginTop: '6px',
        fontSize: '14px',
        lineHeight: '20px',
        fontWeight: 300,
        color: '#99a1a6',
    },
    basketItemDescription: {
        marginTop: '6px',
        fontSize: '14px',
        lineHeight: '20px',
        fontWeight: 300,
        color: '#99a1a6',
    },
    basketItemBottomInfo: {
        marginTop: '16px',
        display: 'flex',
        justifyContent: 'space-between',
    },
    basketItemPriceAndWeight: {},
    basketItemPrice: {
        fontSize: '14px',
        lineHeight: '16px',
        color: '#43525a',
    },
    basketItemWeight: {
        fontSize: '11px',
        lineHeight: '13px',
        color: '#43525a',
    },
    basketItemAddOne: {},
    deleteBtn: {
        position: 'absolute',
        top: '8px',
        right: '8px',
    },
}));

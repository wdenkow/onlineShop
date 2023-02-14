import { makeStyles } from 'tss-react/mui';

export default makeStyles()((theme) => ({
    product: {
        borderRadius: '10px',
        display: 'flex',
        padding: '16px',
        width: '100%',
        backgroundColor: '#FFF',
        boxShadow: '0 4px 10px rgb(63 93 138 / 10%)',
        [theme.breakpoints.up('md')]: {
            flexDirection: 'column',
            width: 'calc(50% - 16px)',
        },
        [theme.breakpoints.up('lg')]: {
            flexDirection: 'column',
            width: 'calc(25% - 16px)',
        },
    },
    modalProduct: {
        width: '100%',
        flexDirection: 'row',
    },
    imageBlock: {
        position: 'relative',
        marginLeft: '-16px',
        minWidth: '40%',
        overflow: 'hidden',
        flexBasis: '40%',
        border: 'none',
        backgroundColor: 'transparent',
        [theme.breakpoints.up('md')]: {
            marginBottom: '16px',
            marginLeft: 0,
        },
    },
    imageWrapper: {
        height: '100%',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        display: 'flex',
        justifyContent: 'flex-end',
        paddingRight: '16px',
        maxHeight: '200px',
        [theme.breakpoints.up('md')]: {
            position: 'static',
            justifyContent: 'center',
            padding: 0,
        },
    },
    image: {},
    eye: {
        position: 'absolute',
        top: '40%',
        left: '40%',
        width: '50px',
        height: '50px',
        backgroundColor: 'red',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: '10px',
        '& svg': {
            fill: 'white',
        },
    },
    content: {},
    title: {
        color: '#43525a',
        fontSize: '18px',
        lineHeight: '21px',
        fontWeight: 500,
        [theme.breakpoints.up('md')]: {
            textAlign: 'center',
        },
    },
    modalTitle: {
        textAlign: 'left',
    },
    composition: {
        height: '60px',
        overflow: 'hidden',
        color: '#99a1a6',
        fontSize: '14px',
        lineHeight: '20px',
        fontWeight: 300,
        marginTop: '6px',
        textAlign: 'left',
        [theme.breakpoints.up('md')]: {
            textAlign: 'center',
        },
    },
    modalComposition: {
        textAlign: 'left',
    },
    selects: {
        margin: '8px 0',
        display: 'flex',
        flexDirection: 'column',
        gap: '4px',
        [theme.breakpoints.up('lg')]: {
            flexDirection: 'row',
        },
    },
    select: {
        width: '100%',
        [theme.breakpoints.up('lg')]: {
            width: '50%',
        },
    },
    additionalProducts: {},
    bottomContent: {
        display: 'flex',
        justifyContent: 'space-between',
        marginTop: '16px',
    },
    price: {
        color: '#43525a',
        fontSize: '14px',
        lineHeight: '16px',
    },
    weight: {
        color: '#99a1a6',
        fontSize: '11px',
        lineHeight: '13px',
    },
}));

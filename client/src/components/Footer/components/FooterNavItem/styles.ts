import { makeStyles } from 'tss-react/mui';

// TODO check color and move their to theme.colors
export default makeStyles()((theme) => ({
    navigationItem: {
        paddingRight: '32px',
    },
    navigationItemLink: {
        fontSize: '18px',
        fontWeight: 500,
        color: '#43525a',
        '&:hover': {
            textDecoration: 'underline',
        },
    },
    navigationList: {
        marginTop: '24px',
    },
    navigationListItem: {
        marginTop: '8px',
        '&:first-of-type': {
            marginTop: 0,
        },
    },
    navigationListItemLink: {
        fontSize: '14px',
        fontWeight: 300,
        color: '#99a1a6',
        '&:hover': {
            textDecoration: 'underline',
        },
    },
}));

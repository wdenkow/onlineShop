import { makeStyles } from 'tss-react/mui';

export default makeStyles()((theme) => ({
    infoItem: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '32px 18px',
        borderRight: `1px solid ${theme.palette.customColors.gray}`,
        '&:last-of-type': {
            borderRight: 'none',
        },
        '& svg': {
            width: '55px',
            height: '48px',
        },
    },
    infoTitle: {
        marginTop: '8px',
        fontSize: '32px',
        lineHeight: '38px',
        fontWeight: 500,
    },
    infoDescription: {
        color: theme.palette.customColors.gray,
    },
}));

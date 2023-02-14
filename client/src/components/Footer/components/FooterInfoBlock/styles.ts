import { makeStyles } from 'tss-react/mui';

export default makeStyles()((theme) => ({
    infoBlock: {
        color: theme.palette.error.main,
        borderBottom: `1px solid ${theme.palette.customColors.gray}`,
    },
    infoList: {
        display: 'flex',
    },
}));

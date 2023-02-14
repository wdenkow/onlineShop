import { makeStyles } from 'tss-react/mui';

export default makeStyles<{ isShowBorder: boolean }>()((theme, { isShowBorder }) => ({
    navigation: {
        borderTop: isShowBorder ? `1px solid ${theme.palette.customColors.gray}` : 'none',
        borderBottom: isShowBorder ? `1px solid ${theme.palette.customColors.gray}` : 'none',
        padding: isShowBorder ? '12px 0' : 'initial',
    },
    navigationList: {
        display: 'flex',
        justifyContent: 'space-around',
    },
    navItem: {
        fontSize: '14px',
        lineHeight: '17px',
        padding: '4px 8px',
        color: theme.palette.customColors.blue,
    },
    activeNavItem: {
        borderBottom: '1px solid red',
    },
}));

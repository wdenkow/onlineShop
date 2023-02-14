import { makeStyles } from 'tss-react/mui';

export default makeStyles<{ isShowIcon: boolean }>()((_, { isShowIcon }) => ({
    select: {
        width: '100%',
        minWidth: '100px',
        '& .MuiSelect-select': {
            padding: '6px !important',
            fontSize: '12px',
        },
        '& .MuiSelect-icon': {
            display: isShowIcon ? 'initial' : 'none',
        },
    },
}));

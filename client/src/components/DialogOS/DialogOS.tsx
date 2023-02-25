import React from 'react';
import { Dialog } from '@mui/material';
import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()(() => ({
    dialog: {
        '& .MuiDialog-paper': {
            minWidth: '800px',
        },
    },
}));

interface Props {
    children: React.ReactNode;
    open: boolean;
    setIsOpen: (value: boolean) => void;
    className?: string;
}

const DialogOS = ({ open, setIsOpen, children, className }: Props) => {
    const { classes, cx } = useStyles();

    const handleClose = () => setIsOpen(false);

    return (
        <Dialog className={cx(classes.dialog, className)} open={open} onClose={handleClose}>
            {children}
        </Dialog>
    );
};

export default DialogOS;

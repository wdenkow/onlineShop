import React from 'react';
import { makeStyles } from 'tss-react/mui';
import Header from '../Header';
import Footer from '../Footer';
import MobileBottomNav from '../MobileBottomNav';

interface Props {
    children: React.ReactNode;
}

const useStyles = makeStyles()(() => ({
    main: {
        marginTop: '40px',
    },
}));

const MasterPage = ({ children }: Props) => {
    const { classes } = useStyles();
    return (
        <>
            <Header />
            <div className={classes.main}>{children}</div>
            <Footer />
            <MobileBottomNav />
        </>
    );
};

export default MasterPage;

import React from 'react';

import useStyles from './styles';

interface Props {
    children: React.ReactNode;
    className?: string;
    isOnMainPage?: boolean;
}

const ContentContainer = ({ className, isOnMainPage = false, children }: Props) => {
    const { classes, cx } = useStyles({ isOnMainPage });
    return <div className={cx(classes.container, className)}>{children}</div>;
};

export default ContentContainer;

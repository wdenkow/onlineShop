import React from 'react';

import useStyles from './styles';

interface Props {
    children: React.ReactNode;
    className?: string;
}

const ContentContainer = ({ className, children }: Props) => {
    const { classes, cx } = useStyles();
    return <div className={cx(classes.container, className)}>{children}</div>;
};

export default ContentContainer;

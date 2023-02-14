import React from 'react';
import { IFooterInfoItem } from '../../utils/utils';
import useStyles from './styles';

interface Props {
    item: IFooterInfoItem;
}

const InfoItem = ({ item }: Props) => {
    const { classes } = useStyles();

    return (
        <div className={classes.infoItem}>
            <item.image />
            <p className={classes.infoTitle}>{item.title}</p>
            <p className={classes.infoDescription}>{item.description}</p>
        </div>
    );
};

export default InfoItem;

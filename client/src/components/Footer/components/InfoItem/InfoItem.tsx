import React from 'react';
import { useTranslation } from 'react-i18next';
import { IFooterInfoItem } from '../../utils/utils';
import useStyles from './styles';

interface Props {
    item: IFooterInfoItem;
}

const InfoItem = ({ item }: Props) => {
    const { classes } = useStyles();
    const { t } = useTranslation();

    return (
        <div className={classes.infoItem}>
            <item.image />
            <p className={classes.infoTitle}>{item.title}</p>
            <p className={classes.infoDescription}>{t(item.description)}</p>
        </div>
    );
};

export default InfoItem;

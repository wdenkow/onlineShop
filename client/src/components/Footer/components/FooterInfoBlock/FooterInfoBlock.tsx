import React from 'react';
import { IFooterInfoItem } from '../../utils/utils';
import InfoItem from '../InfoItem';
import ContentContainer from '../../../ContentContainer';

import useStyles from './styles';

interface Props {
    blockItems: IFooterInfoItem[];
}

const FooterInfoBlock = ({ blockItems }: Props) => {
    const { classes } = useStyles();

    return (
        <div className={classes.infoBlock}>
            <ContentContainer>
                <div className={classes.infoList}>
                    {blockItems.map((item, index) => {
                        return <InfoItem key={index} item={item} />;
                    })}
                </div>
            </ContentContainer>
        </div>
    );
};

export default FooterInfoBlock;

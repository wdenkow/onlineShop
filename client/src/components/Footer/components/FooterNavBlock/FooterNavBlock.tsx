import React from 'react';
import { INavBlockItem } from '../../../../common/interfaces';
import FooterNavItem from '../FooterNavItem';
import useStyles from './styles';
import ContentContainer from '../../../ContentContainer';

interface Props {
    navItems: INavBlockItem[];
}

const FooterNavigationBlock = ({ navItems }: Props) => {
    const { classes } = useStyles();
    return (
        <ContentContainer>
            <div className={classes.navigation}>
                {navItems.map((item: INavBlockItem, index) => {
                    return (
                        <FooterNavItem
                            key={index}
                            mainTitle={item.title}
                            mainLnk={item.itemLink}
                            links={item.links}
                        />
                    );
                })}
            </div>
        </ContentContainer>
    );
};

export default FooterNavigationBlock;

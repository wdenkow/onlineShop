import React from 'react';
import { Link } from 'react-router-dom';
import { ILinksInBlockItem } from '../../../../common/interfaces';
import useStyles from './styles';

interface Props {
    mainTitle: string;
    mainLnk: string;
    links: ILinksInBlockItem[];
}

const FooterNavItem = ({ mainTitle, mainLnk, links }: Props) => {
    const { classes } = useStyles();

    return (
        <div className={classes.navigationItem}>
            <h3>
                <Link to={mainLnk} className={classes.navigationItemLink}>
                    {mainTitle}
                </Link>
            </h3>
            <ul className={classes.navigationList}>
                {links.map((item, index) => {
                    return (
                        <li key={index} className={classes.navigationListItem}>
                            <Link className={classes.navigationListItemLink} to={item.link}>
                                {item.linkTitle}
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default FooterNavItem;

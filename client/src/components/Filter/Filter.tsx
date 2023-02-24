import React from 'react';
import { Tab, Tabs } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { ITabPanel } from '../../common/interfaces';

interface Props {
    value: string;
    onChange: (value: string) => void;
    tabs: Array<ITabPanel>;
    className?: string;
}

const Filter = ({ className, value, tabs, onChange }: Props) => {
    const { t } = useTranslation();

    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        onChange(newValue);
    };

    return (
        <>
            <Tabs
                className={className}
                value={value}
                onChange={handleChange}
                aria-label="basic tabs example"
            >
                {tabs.map((item, index) => {
                    return <Tab value={item.value} key={index} label={t(item.label)} />;
                })}
            </Tabs>
        </>
    );
};

export default Filter;

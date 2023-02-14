import React from 'react';
import { Tab, Tabs } from '@mui/material';
import { FILTER_TABS } from '../../common/mockedData';
import { useTranslation } from 'react-i18next';

interface Props {
    value: string;
    onChange: (value: string) => void;
}

const Filter = ({ value, onChange }: Props) => {
    const { t } = useTranslation();

    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        onChange(newValue);
    };

    return (
        <>
            <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                {FILTER_TABS.map((item, index) => {
                    return <Tab value={item.value} key={index} label={t(item.label)} />;
                })}
            </Tabs>
        </>
    );
};

export default Filter;

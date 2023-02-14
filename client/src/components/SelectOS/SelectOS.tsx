import React, { useEffect } from 'react';
import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from '@mui/material';
import { ISelectOption } from '../../common/interfaces';

import useStyles from './styles';
import { useTranslation } from 'react-i18next';

interface Props {
    className?: string;
    selectClassName?: string;
    defaultValue: string;
    options: Array<ISelectOption>;
    label?: string;
    onChange?: (value: string) => void;
    isShowIcon?: boolean;
    value?: string;
}

const SelectOS = ({
    className,
    selectClassName,
    value,
    defaultValue,
    label,
    options,
    isShowIcon = true,
    onChange,
}: Props) => {
    const { classes, cx } = useStyles({ isShowIcon });
    const [currentValue, setCurrentValue] = React.useState<string>(defaultValue);
    const { t } = useTranslation();

    useEffect(() => {
        if (value) {
            setCurrentValue(value);
        }
    }, [value]);

    const handleChange = (event: SelectChangeEvent) => {
        setCurrentValue(event.target.value);
        if (onChange) {
            onChange(event.target.value);
        }
    };

    return (
        <FormControl className={className}>
            {label && <InputLabel id={`select-${label}`}>{label}</InputLabel>}
            <Select
                className={cx(classes.select, selectClassName)}
                id={`select-${label}`}
                value={currentValue}
                label={label}
                onChange={handleChange}
            >
                {options?.map((item) => {
                    return (
                        <MenuItem key={item.id} value={item.value}>
                            {t(item.label)}
                        </MenuItem>
                    );
                })}
            </Select>
        </FormControl>
    );
};

export default SelectOS;

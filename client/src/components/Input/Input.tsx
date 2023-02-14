import React, { ChangeEvent, useState } from 'react';
import TextField from '@mui/material/TextField';

type InputVariant = 'outlined' | 'filled' | 'standard';
type InputType = 'text' | 'password' | 'email';

interface Props {
    type?: InputType;
    variant?: InputVariant;
    disabled?: boolean;
    required?: boolean;
    placeholder?: string;
    value?: string | number;
    onChange?: (value: string) => void;
}

const InputCustom = ({
    value,
    onChange,
    disabled,
    placeholder,
    required,
    variant,
    type,
}: Props) => {
    const [currentValue, setCurrentValue] = useState<string | number>(value || '');

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (onChange) {
            onChange(e.target.value);
        }
        setCurrentValue(e.target.value);
    };

    return (
        <TextField
            type={type}
            disabled={disabled}
            placeholder={placeholder}
            required={required}
            variant={variant}
            value={currentValue}
            onChange={handleChange}
        />
    );
};

export default InputCustom;

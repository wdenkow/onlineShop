import React from 'react';
import Button from '@mui/material/Button';

type ButtonType = 'text' | 'outlined' | 'contained';

interface Props {
    className?: string;
    children: React.ReactNode;
    disabled?: boolean;
    variant: ButtonType;
    startIcon?: React.ReactNode;
    onClick?: () => void;
}

const ButtonCustom = ({ children, disabled, variant, startIcon, className, onClick }: Props) => {
    return (
        <Button
            className={className}
            disabled={disabled}
            variant={variant}
            startIcon={startIcon}
            onClick={onClick}
        >
            {children}
        </Button>
    );
};

export default ButtonCustom;

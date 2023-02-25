import { Checkbox, FormControlLabel, TextField } from '@mui/material';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { string, object, boolean } from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useTranslation } from 'react-i18next';

import { useFormStyles } from '../formStyles';

const RegisterFormSchema = object({
    phone: string().required(),
    email: string().email('Incorect email').max(20, 'Max 20 characterss').required(),
    password: string().required(),
    isPublicOffer: boolean().isTrue(),
    isPersonalOffer: boolean().isTrue(),
});

interface IRegisterForm {
    phone: string;
    email: string;
    password: string;
    isPublicOffer: boolean;
    isPersonalOffer: boolean;
}

const initialState: IRegisterForm = {
    phone: '',
    email: '',
    password: '',
    isPublicOffer: true,
    isPersonalOffer: true,
};

const RegisterForm = () => {
    const { classes } = useFormStyles();
    const { t } = useTranslation();

    const { control, handleSubmit } = useForm<IRegisterForm>({
        defaultValues: initialState,
        resolver: yupResolver(RegisterFormSchema),
    });

    const onSubmitForm: SubmitHandler<IRegisterForm> = (data) => {
        console.log('data', data);
    };

    return (
        <form className={classes.form} onSubmit={handleSubmit(onSubmitForm)}>
            <Controller
                control={control}
                name="phone"
                render={({ field: { name, onChange, value }, fieldState: { error } }) => {
                    return (
                        <TextField
                            className={classes.input}
                            variant="standard"
                            label="Phone"
                            value={value}
                            onChange={onChange}
                            name={name}
                            error={!!error}
                            helperText={error?.message}
                        />
                    );
                }}
            />
            <Controller
                control={control}
                name="email"
                render={({ field: { name, onChange, value }, fieldState: { error } }) => {
                    return (
                        <TextField
                            className={classes.input}
                            variant="standard"
                            label="Email"
                            value={value}
                            onChange={onChange}
                            name={name}
                            error={!!error}
                            helperText={error?.message}
                        />
                    );
                }}
            />
            <Controller
                control={control}
                name="password"
                render={({ field: { name, onChange, value }, fieldState: { error } }) => {
                    return (
                        <TextField
                            type="password"
                            className={classes.input}
                            variant="standard"
                            label="Password"
                            value={value}
                            onChange={onChange}
                            name={name}
                            error={!!error}
                            helperText={error?.message}
                        />
                    );
                }}
            />
            <Controller
                name="isPublicOffer"
                control={control}
                render={({ field: { onChange, value } }) => {
                    return (
                        <FormControlLabel
                            label={t('form.accessPublickOffer')}
                            control={
                                <Checkbox
                                    required
                                    checked={value}
                                    onChange={onChange}
                                    value={value}
                                />
                            }
                        />
                    );
                }}
            />
            <Controller
                name="isPersonalOffer"
                control={control}
                render={({ field: { onChange, value } }) => {
                    return (
                        <FormControlLabel
                            label={t('form.accesPersonalData')}
                            control={
                                <Checkbox
                                    required
                                    checked={value}
                                    onChange={onChange}
                                    value={value}
                                />
                            }
                        />
                    );
                }}
            />
            <button className={classes.submitBtn} type="submit">
                {t('form.text.register')}
            </button>
        </form>
    );
};

export default RegisterForm;

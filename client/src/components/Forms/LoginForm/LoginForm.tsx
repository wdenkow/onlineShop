import { TextField } from '@mui/material';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { string, object } from 'yup';
import { useTranslation } from 'react-i18next';

import { useFormStyles } from '../formStyles';

const LoginFormSchema = object({
    email: string().email('Incorect email').max(20, 'Max 20 characterss').required(),
    password: string().required(),
});

interface ILoginForm {
    email: string;
    password: string;
}

const initialState: ILoginForm = {
    email: '',
    password: '',
};

const LoginForm = () => {
    const { classes } = useFormStyles();
    const { control, handleSubmit } = useForm<ILoginForm>({
        defaultValues: initialState,
        resolver: yupResolver(LoginFormSchema),
    });
    const { t } = useTranslation();

    const onSubmitForm: SubmitHandler<ILoginForm> = (data) => {
        console.log('data', data);
    };

    return (
        <form className={classes.form} onSubmit={handleSubmit(onSubmitForm)}>
            <Controller
                control={control}
                name="email"
                render={({ field: { name, onChange, value }, fieldState: { error } }) => {
                    return (
                        <TextField
                            className={classes.input}
                            label={t('form.email')}
                            variant="standard"
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
                            className={classes.input}
                            label={t('form.password')}
                            variant="standard"
                            type="password"
                            value={value}
                            onChange={onChange}
                            name={name}
                            error={!!error}
                            helperText={error?.message}
                        />
                    );
                }}
            />
            <button className={classes.submitBtn} type="submit">
                {t('logIn')}
            </button>
        </form>
    );
};

export default LoginForm;

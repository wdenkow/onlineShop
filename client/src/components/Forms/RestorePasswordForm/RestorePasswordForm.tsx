import { yupResolver } from '@hookform/resolvers/yup';
import { TextField } from '@mui/material';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { string, object } from 'yup';

import { useFormStyles } from '../formStyles';

const RegisterFormSchema = object({
    email: string().email('Incorect email').max(20, 'Max 20 characterss').required(),
});

interface IRestorePasswordForm {
    email: string;
}

const initialState: IRestorePasswordForm = {
    email: '',
};

const RestorePasswordForm = () => {
    const { classes } = useFormStyles();

    const { control, handleSubmit } = useForm<IRestorePasswordForm>({
        defaultValues: initialState,
        resolver: yupResolver(RegisterFormSchema),
    });

    const onSubmitForm: SubmitHandler<IRestorePasswordForm> = (data) => {
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
            <input className={classes.submitBtn} type="submit" value="Сбросить пароль" />
        </form>
    );
};

export default RestorePasswordForm;

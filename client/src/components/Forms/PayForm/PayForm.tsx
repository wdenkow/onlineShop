import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { string, object, boolean } from 'yup';
import { Checkbox, FormControlLabel, TextField } from '@mui/material';
import { PatternFormat } from 'react-number-format';
import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import { clearBasket, getTotalItems } from '../../../store/basket/basketSlice';
import SelectOS from '../../SelectOS';
import { PAYMENT_METHODS, SHOPS } from '../../../common/mockedData';
import { useTranslation } from 'react-i18next';

import { useFormStyles } from '../formStyles';

const schema = object({
    street: string()
        .min(1, 'Min 1 character')
        .max(10, 'Max 10 characterss')
        .required('This is required field'),
    houseNumber: string()
        .min(1, 'Min 1 character')
        .max(10, 'Max 10 characterss')
        .required('This is required field'),
    flatNumber: string().max(10, 'Max 10 characterss'),
    floorNumber: string().max(10, 'Max 10 characterss'),
    doorKey: string().max(10, 'Max 10 characterss'),
    entrance: string().max(10, 'Max 10 characterss'),
    phoneNumber: string().required(),
    email: string().email().max(20, 'Max 20 characterss'),
    coupon: string().max(6, 'Max 6 characterss'),
    orderDate: string(),
    comment: string().max(2000, 'Max 2000 characterss'),
    paymentMethod: string(),
    isPublicOffer: boolean().isTrue(),
    isPersonalOffer: boolean().isTrue(),
});

interface PayFofmFields {
    city: string;
    street: string;
    houseNumber: string;
    flatNumber: string;
    floorNumber: string;
    doorKey: string;
    entrance: string;
    phoneNumber: string;
    email: string;
    coupon: string;
    orderDate: string;
    comment: string;
    paymentMethod: string;
    isPublicOffer: boolean;
    isPersonalOffer: boolean;
}

const defaultFormValues: PayFofmFields = {
    city: '',
    street: '',
    houseNumber: '',
    flatNumber: '',
    floorNumber: '',
    doorKey: '',
    entrance: '',
    phoneNumber: '',
    email: '',
    coupon: '',
    orderDate: '',
    comment: '',
    paymentMethod: '',
    isPublicOffer: true,
    isPersonalOffer: true,
};

const PayForm = () => {
    const { classes } = useFormStyles();
    const totalItems = useAppSelector(getTotalItems);
    const dispatch = useAppDispatch();
    const {
        control,
        handleSubmit,
        formState: { errors, submitCount },
    } = useForm<PayFofmFields>({
        defaultValues: defaultFormValues,
        mode: 'onChange',
        resolver: yupResolver(schema),
    });
    const { t } = useTranslation();

    const isDisableSubmit = totalItems > 0;

    const onSubmit: SubmitHandler<PayFofmFields> = (data) => {
        if (isDisableSubmit) {
            dispatch(clearBasket());
            console.log(data);
            alert('Data was send');
        }
    };

    return (
        <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
            <h3>{t('form.label.adress')}</h3>
            <Controller
                name="city"
                control={control}
                render={({ field: { onChange, value } }) => {
                    return (
                        <SelectOS
                            className={classes.selectContainer}
                            selectClassName={classes.select}
                            value={value}
                            onChange={onChange}
                            defaultValue="minsk"
                            options={SHOPS}
                        />
                    );
                }}
            />
            <Controller
                name="street"
                control={control}
                render={({ field: { name, onBlur, onChange, value }, fieldState: { error } }) => {
                    return (
                        <TextField
                            className={classes.input}
                            label={t('form.street')}
                            required
                            name={name}
                            onBlur={onBlur}
                            onChange={onChange}
                            value={value}
                            error={!!error}
                            helperText={error?.message}
                        />
                    );
                }}
            />
            <Controller
                name="houseNumber"
                control={control}
                render={({ field: { name, onBlur, onChange, value }, fieldState: { error } }) => {
                    return (
                        <TextField
                            className={classes.input}
                            label={t('form.houseNumber')}
                            required
                            name={name}
                            onBlur={onBlur}
                            onChange={onChange}
                            value={value}
                            error={!!error}
                            helperText={error?.message}
                        />
                    );
                }}
            />
            <Controller
                name="flatNumber"
                control={control}
                render={({ field: { name, onBlur, onChange, value }, fieldState: { error } }) => {
                    return (
                        <TextField
                            className={classes.input}
                            label={t('form.flatNumber')}
                            name={name}
                            onBlur={onBlur}
                            onChange={onChange}
                            value={value}
                            error={!!error}
                            helperText={error?.message}
                        />
                    );
                }}
            />
            <Controller
                name="floorNumber"
                control={control}
                render={({ field: { name, onBlur, onChange, value }, fieldState: { error } }) => {
                    return (
                        <TextField
                            className={classes.input}
                            label={t('form.floorNumber')}
                            name={name}
                            onBlur={onBlur}
                            onChange={onChange}
                            value={value}
                            error={!!error}
                            helperText={error?.message}
                        />
                    );
                }}
            />
            <Controller
                name="doorKey"
                control={control}
                render={({ field: { name, onBlur, onChange, value }, fieldState: { error } }) => {
                    return (
                        <TextField
                            className={classes.input}
                            label={t('form.doorKey')}
                            name={name}
                            onBlur={onBlur}
                            onChange={onChange}
                            value={value}
                            error={!!error}
                            helperText={error?.message}
                        />
                    );
                }}
            />
            <Controller
                name="entrance"
                control={control}
                render={({ field: { name, onBlur, onChange, value }, fieldState: { error } }) => {
                    return (
                        <TextField
                            className={classes.input}
                            label={t('form.entrance')}
                            name={name}
                            onBlur={onBlur}
                            onChange={onChange}
                            value={value}
                            error={!!error}
                            helperText={error?.message}
                        />
                    );
                }}
            />
            <h3>{t('form.label.payInfo')}</h3>
            <Controller
                name="phoneNumber"
                control={control}
                render={({ field: { name, onBlur, onChange }, fieldState: { error } }) => {
                    return (
                        <PatternFormat
                            required
                            label={t('form.phone')}
                            className={classes.input}
                            name={name}
                            onBlur={onBlur}
                            format="+### ## ### ## ##"
                            customInput={TextField}
                            onValueChange={(values) => {
                                onChange(values.value);
                            }}
                            error={!!error}
                            helperText={error?.message}
                        />
                    );
                }}
            />
            <Controller
                name="email"
                control={control}
                render={({ field: { name, onBlur, onChange, value }, fieldState: { error } }) => {
                    return (
                        <TextField
                            className={classes.input}
                            label={t('form.email')}
                            name={name}
                            onBlur={onBlur}
                            onChange={onChange}
                            value={value}
                            error={!!error}
                            helperText={error?.message}
                        />
                    );
                }}
            />
            <Controller
                name="orderDate"
                control={control}
                render={({ field: { name, onBlur, onChange, value }, fieldState: { error } }) => {
                    return (
                        <TextField
                            className={classes.input}
                            label={t('form.orderDate')}
                            name={name}
                            onBlur={onBlur}
                            onChange={onChange}
                            value={value}
                            error={!!error}
                            helperText={error?.message}
                        />
                    );
                }}
            />
            <Controller
                name="coupon"
                control={control}
                render={({ field: { name, onBlur, onChange, value }, fieldState: { error } }) => {
                    return (
                        <TextField
                            className={classes.input}
                            label={t('form.coupon')}
                            name={name}
                            onBlur={onBlur}
                            onChange={onChange}
                            value={value}
                            error={!!error}
                            helperText={error?.message}
                        />
                    );
                }}
            />
            <Controller
                name="comment"
                control={control}
                render={({ field: { name, onBlur, onChange, value }, fieldState: { error } }) => {
                    return (
                        <TextField
                            className={classes.input}
                            label={t('form.comment')}
                            name={name}
                            onBlur={onBlur}
                            onChange={onChange}
                            value={value}
                            error={!!error}
                            helperText={error?.message}
                        />
                    );
                }}
            />
            <h3>{t('form.label.payMethod')}</h3>
            <Controller
                name="paymentMethod"
                control={control}
                render={({ field: { onChange, value } }) => {
                    return (
                        <SelectOS
                            className={classes.selectContainer}
                            selectClassName={classes.select}
                            value={value}
                            onChange={onChange}
                            defaultValue="credit-card-online"
                            options={PAYMENT_METHODS}
                        />
                    );
                }}
            />
            {submitCount > 1 && !isDisableSubmit && (
                <p className={classes.error}>{t('form.error.noOrders', { totalItems })}</p>
            )}
            {errors?.isPersonalOffer?.message && (
                <p className={classes.error}>{errors?.isPersonalOffer?.message}</p>
            )}
            {errors?.isPublicOffer?.message && (
                <p className={classes.error}>{errors?.isPublicOffer?.message}</p>
            )}
            <button className={classes.submitBtn} type="submit">
                {t('form.sendPayForm')}
            </button>

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
                                    className={classes.checkbox}
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
                                    className={classes.checkbox}
                                    checked={value}
                                    onChange={onChange}
                                    value={value}
                                />
                            }
                        />
                    );
                }}
            />
        </form>
    );
};

export default PayForm;

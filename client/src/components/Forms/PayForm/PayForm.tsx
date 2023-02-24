import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { string, object, boolean } from 'yup';
import { Checkbox, FormControlLabel, TextField } from '@mui/material';
import { PatternFormat } from 'react-number-format';
import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import { clearBasket, getTotalItems } from '../../../store/basket/basketSlice';
import SelectOS from '../../SelectOS';
import { PAYMENT_METHODS, SHOPS } from '../../../common/mockedData';

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
            <h3>Aдрес доставки:</h3>
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
                            label="Улица"
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
                            label="Номер дома"
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
                            label="Квартира"
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
                            label="Этаж"
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
                            label="Подъезд"
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
                            label="Код двери"
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
            <h3>Информация</h3>
            <Controller
                name="phoneNumber"
                control={control}
                render={({ field: { name, onBlur, onChange }, fieldState: { error } }) => {
                    return (
                        <PatternFormat
                            required
                            label="Телефон"
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
                            label="Email"
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
                            label="Дата"
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
                            label="Есть купон/промокод?"
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
                            label="Ваш комментарий"
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
            <h3>Способ оплаты</h3>
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
                <p
                    className={classes.error}
                >{`У вас нет активных заказов. Количество товаров в корзине: ${totalItems}`}</p>
            )}
            {errors?.isPersonalOffer?.message && (
                <p className={classes.error}>{errors?.isPersonalOffer?.message}</p>
            )}
            {errors?.isPublicOffer?.message && (
                <p className={classes.error}>{errors?.isPublicOffer?.message}</p>
            )}
            <input className={classes.submitBtn} type="submit" value="send data" />

            <Controller
                name="isPublicOffer"
                control={control}
                render={({ field: { onChange, value } }) => {
                    return (
                        <FormControlLabel
                            label="принять условия публичной оферты"
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
                            label="принять условия положения об обработке и защите персональных данных"
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

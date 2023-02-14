import React from 'react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Checkbox, FormControlLabel, TextField } from '@mui/material';
import { PatternFormat } from 'react-number-format';
import SelectOS from '../../../../components/SelectOS';
import { PAYMENT_METHODS, SHOPS } from '../../../../common/mockedData';
import { useAppDispatch, useAppSelector } from '../../../../store/hooks';
import { clearBasket, getTotalItems } from '../../../../store/basket/basketSlice';

import useStyles from './styles';

const schema = yup.object({
    street: yup
        .string()
        .min(1, 'Min 1 character')
        .max(10, 'Max 10 characterss')
        .required('This is required field'),
    houseNumber: yup
        .string()
        .min(1, 'Min 1 character')
        .max(10, 'Max 10 characterss')
        .required('This is required field'),
    flatNumber: yup.string().max(10, 'Max 10 characterss'),
    floorNumber: yup.string().max(10, 'Max 10 characterss'),
    doorKey: yup.string().max(10, 'Max 10 characterss'),
    entrance: yup.string().max(10, 'Max 10 characterss'),
    phoneNumber: yup.string().required(),
    email: yup.string().email().max(20, 'Max 20 characterss'),
    coupon: yup.string().max(6, 'Max 6 characterss'),
    orderDate: yup.string(),
    comment: yup.string().max(2000, 'Max 2000 characterss'),
    paymentMethod: yup.string(),
    isPublicOffer: yup.boolean().isTrue(),
    isPersonalOffer: yup.boolean().isTrue(),
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

export const PayForm = () => {
    const { classes } = useStyles();
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
                render={({ field: { onChange, value, name } }) => {
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
                                    className={classes.checkbox}
                                    checked={value}
                                    onChange={onChange}
                                    value=""
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
                                    className={classes.checkbox}
                                    checked={value}
                                    onChange={onChange}
                                    value=""
                                />
                            }
                        />
                    );
                }}
            />
        </form>
    );
};

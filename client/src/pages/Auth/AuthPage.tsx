import React, { useState } from 'react';
import ContentContainer from '../../components/ContentContainer';
import Filter from '../../components/Filter';
import LoginForm from '../../components/Forms/LoginForm';
import RegisterForm from '../../components/Forms/RegisterForm';
import TabPanel from '../../components/TabContent/TabContent';

import useStyles from './styles';

const tabs = [
    { id: 1, label: 'Авторизация', value: 'authorization' },
    { id: 2, label: 'Регистрация', value: 'registration' },
];

const AuthPage = () => {
    const { classes } = useStyles();
    const [filterValue, setFilterValue] = useState<string>('authorization');

    return (
        <ContentContainer>
            <Filter
                className={classes.filter}
                tabs={tabs}
                value={filterValue}
                onChange={setFilterValue}
            />
            <TabPanel value={filterValue} panelName="authorization">
                <LoginForm />
            </TabPanel>
            <TabPanel value={filterValue} panelName="registration">
                <RegisterForm />
            </TabPanel>
        </ContentContainer>
    );
};

export default AuthPage;

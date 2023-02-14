import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';

import MasterPage from './components/MasterPage';
import { ThemeProvider } from '@mui/material';
import { theme } from './styles/theme';
import PizzaPage from './pages/pizza';
import WingsPage from './pages/wings';
import Basket from './pages/Basket';
import { PayForm } from './pages/Basket/components/PayForm/PayForm';

console.log('test');

export default function App() {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <BrowserRouter>
                <Switch>
                    <MasterPage>
                        <Route exact path="/pizza">
                            <PizzaPage />
                        </Route>
                        <Route exact path="/wings">
                            <WingsPage />
                        </Route>
                        <Route exact path="/basket">
                            <Basket />
                        </Route>
                        <Route exact path="/basket-order">
                            <PayForm />
                            {/* TODO add icon for returning to /basket */}
                        </Route>
                        <Route exact path="/">
                            <PizzaPage />
                        </Route>
                    </MasterPage>
                </Switch>
            </BrowserRouter>
        </ThemeProvider>
    );
}

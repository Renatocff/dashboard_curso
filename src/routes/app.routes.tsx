import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Layout from '../components/Layout';
import Dashboard from '../pages/Dashboard';
import Contas from '../pages/Contas';
import Movimentacoes from '../pages/Movimentacoes';

const AppRoutes: React.FC = () => (
    <Layout>
        <Switch>
            <Route path="/dashboard" exact component={Dashboard} />
            <Route path="/contas" exact component={Contas} />
            <Route path="/movimentos/:type" exact component={Movimentacoes} />
        </Switch>
    </Layout>
);

export default AppRoutes;
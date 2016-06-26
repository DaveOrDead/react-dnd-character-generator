import React from 'react';
import { Route, IndexRoute } from 'react-router';

import ViewCharacterPage from './containers/viewCharacterPage';
import CreateCharacter from './components/createCharacter';

import App from './components/app';
import DashboardPage from './components/dashboardPage';
import BasicsPage from './containers/basicsPage';
import AbilitiesPage from './containers/abilitiesPage';
import SkillsPage from './containers/skillsPage';
import FeatsPage from './containers/featsPage';

export default (
    <Route path="/" component={App}>
        <IndexRoute component={DashboardPage} />
        <Route path="create" component={CreateCharacter}>
            <IndexRoute component={BasicsPage}/>
            <Route path="abilities" component={AbilitiesPage}/>
            <Route path="skills" component={SkillsPage}/>
            <Route path="feats" component={FeatsPage}/>
        </Route>
        <Route path="character/:charId" component={ViewCharacterPage}/>
    </Route>
);

import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';

import ViewCharacter from './components/viewCharacter';
import ViewCharacters from './components/viewCharacters';
import CreateCharacter from './components/createCharacter';

import BasicsPage from './containers/basicsPage';
import AbilitiesPage from './containers/abilitiesPage';
import SkillsPage from './containers/skillsPage';
import FeatsPage from './containers/featsPage';

export default (
    <Route path="/" component={App}>
        <Route path="create-character" component={CreateCharacter}>
            <IndexRoute component={BasicsPage}/>
            <Route path="abilities" component={AbilitiesPage}/>
            <Route path="skills" component={SkillsPage}/>
            <Route path="feats" component={FeatsPage}/>
        </Route>
        <Route path="view-characters" component={ViewCharacters} >
        </Route>
        <Route path="view-character/:charId" component={ViewCharacter}/>
  </Route>
);

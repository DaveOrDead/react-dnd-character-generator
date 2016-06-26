import React from 'react';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../../actions/charGenActions';
import {abilities} from '../../data/abilities';
import Button from '../../components/button';
import Ability from '../ability';
import StatBox from '../../components/statBox';
import SavingThrows from '../../components/savingThrows';

const ViewCharacterPage = ({actions, character}) => {
console.log(character);
        return (
            <div>
                <ul className="h-spacing">
                    <li>Name: {character.name}</li>
                    <li>Race: {character.race.name}</li>
                    <li>Level: {character.class.level}</li>
                    <li>Class: {character.class.value}</li>
                    <li>Size: {character.race.size}</li>
                </ul>

                <div className="h-spacing">
                    {abilities.map(function(result) {
                        return (<Ability
                           key={result.id}
                           abilityId={result.id}
                           text={result.name}
                           race={character.race}
                       />);
                    })}
                </div>

                <h3 className="h-spacing-3x-small heading-sub-title">Saving Throws</h3>

                <SavingThrows
                    baseSavingThrows={character.class.baseSavingThrows}
                    abilities={character.abilities}
                />

                <h3 className="h-spacing-3x-small heading-sub-title">Base Attack Bonus:</h3>
                 <StatBox label="BAB" value={character.class.baseAttackBonus[0]} />


            </div>



            );
    };

ViewCharacterPage.propTypes = {
    actions: React.PropTypes.object.isRequired,
    character: React.PropTypes.object.isRequired
};

function mapStateToProps(state) {
    return {
        character: state.character
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(actions, dispatch)
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ViewCharacterPage);

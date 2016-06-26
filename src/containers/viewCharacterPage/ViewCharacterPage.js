import React from 'react';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../../actions/charGenActions';
import {abilities} from '../../data/abilities';
import Button from '../../components/button';

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
                <h3 className="h-spacing-3x-small heading-sub-title">Abilities</h3>
                <ul className="h-spacing">
                    <li>Strength: {character.abilities.ability1}</li>
                    <li>Dex: {character.abilities.ability2}</li>
                    <li>Con: {character.abilities.ability3}</li>
                    <li>Intelligence: {character.abilities.ability4}</li>
                    <li>Wis: {character.abilities.ability5}</li>
                    <li>Cha: {character.abilities.ability6}</li>
                </ul>
                <h3 className="h-spacing-3x-small heading-sub-title">Saving Throws</h3>
                <ul className="h-spacing">
                    <li>Fortitude: {character.class.baseSavingThrows.fort}</li>
                    <li>Reflex: {character.class.baseSavingThrows.ref}</li>
                    <li>Will: {character.class.baseSavingThrows.will}</li>
                </ul>
                    <div>Base Attack Bonus: {character.class.baseAttackBonus[0]}</div>

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
